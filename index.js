/**
* hexo-tag-bilibili
* https://github.com/Z4Tech/hexo-tag-bilibili.git
* Copyright (c) 2015, Chenguang Zhang
* Licensed under the MIT license.

* Syntax:
* {% bilibili [av_id] %} or {% bilibili [av_id [page]] %}
*/
var bili_convert = require('bilibili-embed-convert');

hexo.extend.tag.register('bilibili', function(args){
  var av_id = parseInt(args[0]);
  var page = parseInt(args[1]) || 1;
  var config = hexo.config.bilibili || {};
  config.width = config.width || 452;
  config.height = config.height || 544;
  var bili_video = new bili_convert(av_id, page);
  console.log(bili_video.getIndex());
  return bili_video.embedAddr(config.width, config.height);
});
