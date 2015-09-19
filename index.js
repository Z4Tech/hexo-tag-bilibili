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
  var config = hexo.config.bilibili || {};
  config.width = config.width || 452;
  config.height = config.height || 544;
  var bili_video = new bili_convert(args);
  return bili_video.embedAddr();
});
