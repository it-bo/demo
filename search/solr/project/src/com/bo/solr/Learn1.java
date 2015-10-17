package com.bo.solr;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.apache.poi.hwpf.HWPFDocument;
import org.apache.solr.client.solrj.SolrQuery;
import org.apache.solr.client.solrj.SolrQuery.ORDER;
import org.apache.solr.client.solrj.SolrQuery.SortClause;
import org.apache.solr.client.solrj.SolrServerException;
import org.apache.solr.client.solrj.impl.HttpSolrServer;
import org.apache.solr.client.solrj.impl.XMLResponseParser;
import org.apache.solr.client.solrj.response.FacetField;
import org.apache.solr.client.solrj.response.QueryResponse;
import org.apache.solr.common.params.FacetParams;

public class Learn1 {

	public static final String SOLR_URL = "http://127.0.0.1:8080/solr/test";
	
	public static final String path = "/solr/doc";
	
	 private static HashMap<Integer, String> mapRegion = new HashMap<Integer, String>();
	    private static HashMap<Integer, String> mapCategory = new HashMap<Integer, String>();

	  public static void main(String[] args) throws SolrServerException, IOException {
		    HttpSolrServer core = new HttpSolrServer(SOLR_URL);
	        core.setMaxRetries(1);
	        core.setConnectionTimeout(5000);
	        core.setParser(new XMLResponseParser());
	        core.setSoTimeout(1000); // socket read timeout
	        core.setDefaultMaxConnectionsPerHost(100);
	        core.setMaxTotalConnections(100);
	        core.setFollowRedirects(false); // defaults to false
	        core.setAllowCompression(true);
		    //�������-�ִ�-����
		    AddDocs(core);
		    //solr����
		    readDocs(core);
		    //ɾ������
		    delDocs(core);
	  }

	  public static void AddDocs(HttpSolrServer core) throws SolrServerException, IOException {
	        List<Item> items = new ArrayList<Item>();
	        getFiles(path, items);
	        core.addBeans(items);
	        core.commit();
	  }

		private static Item makeItem(String id, String title,String path, String content) {
		    Item item = new Item();
		    item.setId(id);
		    item.setTitle(title);
		    item.setPath(path);
		    item.setContent(content);
		    return item;
		}
		
		
	private static void getFiles(String path, List<Item> items) throws IOException {
		File root = new File(path);
		File[] files = root.listFiles();
		for (File file : files) {
			if(file.isDirectory()){
				getFiles(file.getAbsolutePath(),items);
			}
			if (file.isFile() && file.getName().endsWith(".doc")) {
				String fileName = file.getName();
				InputStream is = new FileInputStream(file);
				HWPFDocument doc = new HWPFDocument(is);
				items.add(makeItem(String.valueOf(items.size() + 1), fileName.substring(0, fileName.lastIndexOf(".")),file.getAbsolutePath(),
						doc.getDocumentText()));
			}
		}
	}

	  public static void delDocs(HttpSolrServer core) {
	    long start = System.currentTimeMillis();
	    try {
	      core.deleteByQuery("*:*");
	      core.commit();
	    } catch (Exception e) {
	      System.out.println(e);
	    }
	    System.out.println("time elapsed(ms):"
	        + (System.currentTimeMillis() - start));
	  }
	  
	  public static void readDocs(HttpSolrServer core) throws SolrServerException{
		  SolrQuery query = new SolrQuery();
	        query.setQuery("*:*");
	        query.setStart(0); // query�Ŀ�ʼ����(��ҳʹ��)
	        query.setRows(100); // query�ķ�������(��ҳʹ��)
	        query.setFacet(true); // ����ʹ��facet
	        query.setFacetMinCount(1); // ����facet���ٵ�ͳ������
	        query.setFacetLimit(10); // facet����ķ�������
	        query.addFacetField("title"); // facet���ֶ�
	        query.setFacetSort(FacetParams.FACET_SORT_COUNT);
	        query.addSort(new SortClause("id", ORDER.asc)); // ����
	        QueryResponse response = core.query(query);
	        List<Item> items_rep = response.getBeans(Item.class);
	        List<FacetField> facetFields = response.getFacetFields();
	        // ��Ϊ�����start��rows������Ϊ0���������ﲻ����query������
	        System.out.println("--------------------");
	        System.out.println("Search result:");
	        for (Item item : items_rep) {
	            System.out.println("id=" + item.getId() + "\ttitle=" + item.getTitle()
	                    + "\tconent=" + mapRegion.get(item.getId()));
	        }
	        // ��ӡ����facet
	        for (FacetField ff : facetFields) {
	            System.out.println("--------------------");
	            System.out.println("name=" + ff.getName() + "\tcount=" + ff.getValueCount());
	            System.out.println("--------------------");
	        }
	    }
}