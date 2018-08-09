---
layout: page
permalink: /demo2/
---

back: [Demo1](/openui5-demo)

<script type="text/javascript">
  sap.ui.getCore().attachInit(function () {
    var app = new sap.m.App("myApp", {
      initialPage: "page1"
    });
    var page1 = new sap.m.Page("page1", {
      title : "Hello World",
      showNavButton : false,
      content : new sap.m.Button({
        text : "Go to Page 2",
        press : function () {
          app.to("page2");
        }
      })
    });
    var page2 = new sap.m.Page("page2", {
      title : "Hello Page 2",
      showNavButton : true,
      navButtonPress : function () {
        app.back();
      }
    });
    app.addPage(page1).addPage(page2);
    app.placeAt("content");
  });
</script>