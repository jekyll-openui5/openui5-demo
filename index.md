---
layout: page
message: >-
  I am data from the front matter, so basically any data can be processed without fiddling
  with the code.
---

next: [Demo2](demo2)

There is only a small button here to demonstrate, that OpenUI5 is working:

<script>
   var btn = new sap.m.Button({
      text:'Hello World',
      press:function(){alert('{{ page.message }}');}
   });
   btn.placeAt('content');
</script>
