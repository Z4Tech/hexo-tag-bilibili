# hexo-tag-bilibili
[![Code Climate](https://codeclimate.com/github/Z4Tech/hexo-tag-bilibili/badges/gpa.svg)](https://codeclimate.com/github/Z4Tech/hexo-tag-bilibili)
Embed bilibili videos in Hexo posts/pages

# About
> This is a [Hexo](http://hexo.io/) tag plugin for embeded  [Bilibili](http://bilibili.com/) videos in posts/pages

## Installation
```bash
npm install --save hexo-tag-vine
```
## Usage
The full tag format is as follows:
```bash
{% bilibili [av_id] %}
or
{% bilibili [av_id] [page] %}
```
example:
```bash
{% bilibili 2333333 3 %}
```

## Configuration
You can configure the type, autoplay and size in your main _config.yml:

Example configuration:
```yml
bilibili:
  width: 452
  height: 544
```

## Style
The Video Clip is wrapped by a div with the class `bili_video`. You can modify it in your theme's css files.

## License

Copyright (c) 2015, Z4Tech. Licensed under the [MIT license](LICENSE).
