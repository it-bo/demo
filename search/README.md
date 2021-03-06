---
title: 搜索引擎简介 
tags: lucene,Solr,Elasticsearch,逍遥神风
grammar_cjkRuby: true
---
[TOC]

---

# Lucene 

## 简介

`Lucene`是一个`JAVA`搜索类库，它本身并不是一个完整的解决方案，需要额外的开发工作。

## 优缺点

* 优点：

1. 成熟的解决方案，有很多的成功案例。apache顶级项目，正在持续快速的进步。庞大而活跃的开发社区，大量的开发人员。
2. 它只是一个类库，有足够的定制和优化空间：经过简单定制，就可以满足绝大部分常见的需求。
3. 经过优化，可以支持10亿+量级的搜索。

* 缺点：

1. 需要额外的开发工作。所有的扩展，分布式，可靠性等都需要自己实现。
2. 非实时，从建索引到可以搜索中间有一个时间延迟，而当前的==近实时==搜索方案的可扩展性有待进一步完善。

---

# 常用基于Lucene的开源搜索引擎解决方案

## Solr 

### 简介

Solr（读作`solar`）是Apache Lucene项目的开源==企业搜索平台==。其主要功能包括==全文检索==、==命中标示==、==分面搜索==、==动态聚类==、==数据库集成==，以及==富文本==(Word、PDF)的处理。
Solr是高度可扩展的，并提供了==分布式搜索==和==索引复制==。Solr是最流行的企业级搜索引擎，Solr4还增加了`NoSQL`支持。
Solr是用Java编写、运行在Servlet容器的一个==独立==的全文搜索服务器。 
Solr采用了Lucene Java搜索库为核心的全文索引和搜索，并具有类似REST的HTTP/XML和JSON的`API`。
Solr强大的外部配置功能使得无需进行Java编码，便可对其进行调整以适应多种类型的应用程序。Solr有一个插件架构，以支持更多的高级定制。

### 优缺点

* 优点
1. Solr有一个更大、更==成熟==的用户、开发和贡献者社区。
2. 支持添加==多种格式==的索引，如：HTML、PDF、微软Office系列软件格式以及JSON、XML、CSV等纯文本格式。
3. Solr比较成熟、稳定。
4. 不考虑建索引的同时进行搜索，速度更快。

* 缺点
1. 建立索引时，搜索效率下降，实时索引搜索效率不高。

## Elasticsearch

### 简介
Elasticsearch(简称ES)是一个==实时==的分布式搜索和分析引擎。它可以帮助你用前所未有的速度去处理大规模数据。
它可以用于==全文搜索==，==结构化搜索==以及==分析==，当然你也可以将这三者进行组合。
ES使用Lucene作为内部引擎，但是在使用它做==全文搜索==时，只需要使用统一开发好的API即可，而不需要了解其背后复杂的Lucene的运行原理。
当然ES并不仅仅是Lucene这么简单，它不但包括了==全文搜索==功能，还可以进行以下工作:

* 分布式实时文件存储，并将每一个字段都编入索引，使其可以被搜索。
* 实时分析的分布式搜索引擎。
* 可以扩展到上百台服务器，处理PB级别的结构化或非结构化数据。

这么多的功能被集成到一台服务器上，你可以轻松地通过客户端或者任何你喜欢的程序语言与ES的RESTful进行交流。

ES的上手是非常简单的。它附带了很多非常合理的默认值，这让初学者很好地避免一上手就要面对复杂的理论，
它安装好了就可以使用了，用很小的学习成本就可以变得很有生产力。
随着越学越深入，还可以利用ES更多高级的功能，整个引擎可以很灵活地进行配置。可以根据自身需求来定制属于自己的ES。

### 使用案例：

* 维基百科使用ES来进行全文搜做并高亮显示关键词，以及提供search-as-you-type、did-you-mean等搜索建议功能。
* 英国卫报使用ES来处理访客日志，以便能将公众对不同文章的反应实时地反馈给各位编辑。
* StackOverflow将全文搜索与地理位置和相关信息进行结合，以提供more-like-this相关问题的展现。
* GitHub使用ES来检索超过1300亿行代码。
* 每天，Goldman Sachs使用它来处理5TB数据的索引，还有很多投行使用它来分析股票市场的变动。

但是ES并不只是面向大型企业的，它还帮助了很多类似DataDog以及Klout的创业公司进行了功能的扩展。

### 优缺点:
* 优点
1. ES是分布式的。不需要其他组件，分发是实时的，被叫做`Push replication`。
2. ES完全支持Lucene的接近实时的搜索。处理多租户不需要特殊配置，而Solr则需要更多的高级设置。
3. ES采用Gateway的概念，使得完备份更加简单。各节点组成对等的网络结构，某些节点出现故障时会自动分配其他节点代替其进行工作。

* 缺点
1. 不够自动（不适合当前新的Index Warmup API）

## Elasticsearch与Solr的区别
### 测试分析

* 当单纯的对已有数据进行搜索时，Solr更快。
* 当实时建立索引时,Solr会产生io阻塞，查询性能较差,ES具有明显的优势。
* 随着数据量的增加，Solr的搜索效率会变得更低，而ES却没有明显的变化。

综上所述，Solr的架构不适合实时搜索的应用。
### 比较总结

* 二者安装都很简单；
* Solr利用Zookeeper进行分布式管理，而ES自身带有分布式协调管理功能;
* Solr支持更多格式的数据，而ES仅支持json文件格式；
* Solr官方提供的功能更多，而ES本身更注重于核心功能，高级功能多有第三方插件提供；
* Solr在传统的搜索应用中表现好于ES，但在处理实时搜索应用时效率明显低于ES。
* Solr是传统搜索应用的有力解决方案，但ES更适用于新兴的实时搜索应用。

# 其他基于Lucene的开源搜索引擎解决方案

## Katta

### 简介

基于Lucene的，支持分布式，可扩展，具有容错功能，准实时的搜索方案。

### 优缺点

* 优点
1. 开箱即用，可以与Hadoop配合实现分布式。
2. 具备扩展和容错机制。

* 缺点
1. 只是搜索方案，建索引部分还是需要自己实现。
2. 在搜索功能上，只实现了最基本的需求。
3. 成功案例较少，项目的成熟度稍微差一些。
4. 因为需要支持分布式，对于一些复杂的查询需求，定制的难度会比较大。

## Hadoop contrib/index

### 简介

Map/Reduce模式的，分布式建索引方案，可以跟 Katta 配合使用。

### 优缺点

* 优点
1. 分布式建索引，具备可扩展性。

* 缺点
1. 只是建索引方案，不包括搜索实现。
2. 工作在批处理模式，对实时搜索的支持不佳。

## LinkedIn

### 简介

基于 Lucene 的一系列解决方案，包括 准实时搜索zoie，facet搜索实现 bobo，机器学习算法decomposer，摘要存储库krati，数据库模式包装 sensei等等。

### 优缺点

* 优点
1. 经过验证的解决方案，支持分布式，可扩展，丰富的功能实现。

* 缺点
1. 与linkedin公司的联系太紧密，可定制性比较差。

## Lucandra

### 简介

基于 Lucene，索引存在 cassandra 数据库中。

### 优缺点

* 优点
1. 参考 cassandra 的优点

* 缺点
1. 参考 cassandra 的缺点。
2. 只是一个 demo，没有经过大量验证。

## HBasene

### 简介

基于 Lucene，索引存在 HBase 数据库中

### 优缺点

* 优点
1. 参考 HBase 的优点

* 缺点
1. 参考 HBase 的缺点。
2. 在实现中，lucene terms是存成行，但每个term对应的posting lists是以列的方式存储的,随着单个term的posting lists的增大，查询时的速度受到的影响会非常大。
