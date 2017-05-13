define(["../../../bower_components/web_lib_template/template.js"/*tpa=http://zworld.qyerstatic.com/web/bower_components/web_lib_template/template.js*/],function(){
    template.config('escape',false);
    //生成模板
    function tpl(){}

    tpl.prototype = {
        getTPL:function(aType,aData){
            var render,aData = aData||{};
            render = template.compile(this.segments[aType]());
            return render(aData);
        },
        segments:{
          hot_des:function(){
            html = ['<ul class="hot-des-category-list" id="des-category-list">',
                      '{{each hot_des as des}}',
                      '<li class="hot-des-category-item">',
                        '<p class="hot-des-category-icon">',
                          '<span class="zwui-iconfont iconfont-category {{icon[des.id]}}"></span>',
                        '</p>',
                        '<h2 class="hot-des-category-title">{{des.name}}</h2>',
                        '<p class="hot-des-category-subtitle">',
                          '{{each des.hot_link as link}}',
                            '<a href="{{link.link}}" target="_blank">{{link.name}}</a>',
                          '{{/each}}',
                        '</p>',
                        '<p class="hot-des-category-arrow"><span class="zwui-iconfont icon-arrow-right"></span></p>',
                      '</li>',
                      '{{/each}}',
                    '</ul>',
                    '<div class="hot-des-category-contents" id="des-category-contents">',
                      '{{each hot_des as des}}',
                      '<div class="des-category-contents-wrap">',
                        '<div class="des-category-contents-column left">',
                          '{{each des.child.list as list i}}',
                            '{{if i < 2}}',
                              '{{if list.content.length}}',
                                '<h2 class="column-title">{{list.name}}</h2>',
                                '{{if des.id == 6}}',
                                  '<div class="column-img-wrap clearfix">',
                                    '{{each list.content as content}}',
                                      '<a class="column-img" href="{{content.link}}" target="_blank"><img src="{{content.img}}" /></a>',
                                    '{{/each}}',
                                  '</div>',
                                '{{else}}',
                                  '<div class="column-link-wrap">',
                                    '{{each list.content as content}}',
                                      '{{if content.is_endl}}',
                                        '<br>',
                                      '{{else}}',
                                        '<a class="column-link {{if content.is_hot}}active{{/if}}" href="{{content.link}}" target="_blank">{{content.name}}</a>',
                                      '{{/if}}',
                                    '{{/each}}',
                                  '</div>',
                                '{{/if}}',
                              '{{/if}}',
                            '{{/if}}',
                          '{{/each}}',
                        '</div>',
                        '{{if des.id != 6}}',
                          '<div class="des-category-contents-column right">',
                            '{{each des.child.list as list i}}',
                              '{{if i >= 2}}',
                                '{{if list.content.length}}',
                                  '<h2 class="column-title">{{list.name}}</h2>',
                                  '<div class="column-link-wrap">',
                                    '{{each list.content as content}}',
                                      '{{if content.is_endl}}',
                                        '<br>',
                                      '{{else}}',
                                        '<a class="column-link {{if content.is_hot}}active{{/if}}" href="{{content.link}}" target="_blank">{{content.name}}</a>',
                                      '{{/if}}',
                                    '{{/each}}',
                                  '</div>',
                                '{{/if}}',
                              '{{/if}}',
                            '{{/each}}',
                            '{{if des.child.topic}}',
                              '<div class="hot-topic">',
                                '<a href="{{des.child.topic.link}}"><img src="{{des.child.topic.pic}}" /></a>',
                              '</div>',
                            '{{/if}}',
                          '</div>',
                        '{{/if}}',
                      '</div>',
                      '{{/each}}',
                    '</div>'].join('');
            return html;
          } 
        }
    }
    return new tpl();
})