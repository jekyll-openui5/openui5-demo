---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
---

# Demo Site for the Jekyll theme jekyll-openui5

There is only a small button here to demonstrate, that OpenUI5 is working:

<script>
   var btn = new sap.m.Button({
      text:'Hello World',
      press:function(){alert('Hello!');}
   });
   btn.placeAt('content');
</script>
