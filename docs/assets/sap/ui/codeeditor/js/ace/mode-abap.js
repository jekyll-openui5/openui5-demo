ace.define("ace/mode/abap_highlight_rules",[],function(r,e,m){"use strict";var o=r("../lib/oop");var T=r("./text_highlight_rules").TextHighlightRules;var A=function(){var k=this.createKeywordMapper({"variable.language":"this","keyword":"ADD ALIAS ALIASES ASCENDING ASSERT ASSIGN ASSIGNING AT BACK"+" CALL CASE CATCH CHECK CLASS CLEAR CLOSE CNT COLLECT COMMIT COMMUNICATION COMPUTE CONCATENATE CONDENSE CONSTANTS CONTINUE CONTROLS CONVERT CREATE CURRENCY"+" DATA DEFINE DEFINITION DEFERRED DELETE DESCENDING DESCRIBE DETAIL DIVIDE DO"+" ELSE ELSEIF ENDAT ENDCASE ENDCLASS ENDDO ENDEXEC ENDFORM ENDFUNCTION ENDIF ENDIFEND ENDINTERFACE ENDLOOP ENDMETHOD ENDMODULE ENDON ENDPROVIDE ENDSELECT ENDTRY ENDWHILE EVENT EVENTS EXEC EXIT EXPORT EXPORTING EXTRACT"+" FETCH FIELDS FORM FORMAT FREE FROM FUNCTION"+" GENERATE GET"+" HIDE"+" IF IMPORT IMPORTING INDEX INFOTYPES INITIALIZATION INTERFACE INTERFACES INPUT INSERT IMPLEMENTATION"+" LEAVE LIKE LINE LOAD LOCAL LOOP"+" MESSAGE METHOD METHODS MODIFY MODULE MOVE MULTIPLY"+" ON OVERLAY OPTIONAL OTHERS"+" PACK PARAMETERS PERFORM POSITION PROGRAM PROVIDE PUT"+" RAISE RANGES READ RECEIVE RECEIVING REDEFINITION REFERENCE REFRESH REJECT REPLACE REPORT RESERVE RESTORE RETURN RETURNING ROLLBACK"+" SCAN SCROLL SEARCH SELECT SET SHIFT SKIP SORT SORTED SPLIT STANDARD STATICS STEP STOP SUBMIT SUBTRACT SUM SUMMARY SUPPRESS"+" TABLES TIMES TRANSFER TRANSLATE TRY TYPE TYPES"+" UNASSIGN ULINE UNPACK UPDATE"+" WHEN WHILE WINDOW WRITE"+" OCCURS STRUCTURE OBJECT PROPERTY"+" CASTING APPEND RAISING VALUE COLOR"+" CHANGING EXCEPTION EXCEPTIONS DEFAULT CHECKBOX COMMENT"+" ID NUMBER FOR TITLE OUTPUT"+" WITH EXIT USING"+" INTO WHERE GROUP BY HAVING ORDER BY SINGLE"+" APPENDING CORRESPONDING FIELDS OF TABLE"+" LEFT RIGHT OUTER INNER JOIN AS CLIENT SPECIFIED BYPASSING BUFFER UP TO ROWS CONNECTING"+" EQ NE LT LE GT GE NOT AND OR XOR IN LIKE BETWEEN","constant.language":"TRUE FALSE NULL SPACE","support.type":"c n i p f d t x string xstring decfloat16 decfloat34","keyword.operator":"abs sign ceil floor trunc frac acos asin atan cos sin tan"+" abapOperator cosh sinh tanh exp log log10 sqrt"+" strlen xstrlen charlen numofchar dbmaxlen lines"},"text",true," ");var c="WITH\\W+(?:HEADER\\W+LINE|FRAME|KEY)|NO\\W+STANDARD\\W+PAGE\\W+HEADING|"+"EXIT\\W+FROM\\W+STEP\\W+LOOP|BEGIN\\W+OF\\W+(?:BLOCK|LINE)|BEGIN\\W+OF|"+"END\\W+OF\\W+(?:BLOCK|LINE)|END\\W+OF|NO\\W+INTERVALS|"+"RESPECTING\\W+BLANKS|SEPARATED\\W+BY|USING\\W+(?:EDIT\\W+MASK)|"+"WHERE\\W+(?:LINE)|RADIOBUTTON\\W+GROUP|REF\\W+TO|"+"(?:PUBLIC|PRIVATE|PROTECTED)(?:\\W+SECTION)?|DELETING\\W+(?:TRAILING|LEADING)"+"(?:ALL\\W+OCCURRENCES)|(?:FIRST|LAST)\\W+OCCURRENCE|INHERITING\\W+FROM|"+"LINE-COUNT|ADD-CORRESPONDING|AUTHORITY-CHECK|BREAK-POINT|CLASS-DATA|CLASS-METHODS|"+"CLASS-METHOD|DIVIDE-CORRESPONDING|EDITOR-CALL|END-OF-DEFINITION|END-OF-PAGE|END-OF-SELECTION|"+"FIELD-GROUPS|FIELD-SYMBOLS|FUNCTION-POOL|MOVE-CORRESPONDING|MULTIPLY-CORRESPONDING|NEW-LINE|"+"NEW-PAGE|NEW-SECTION|PRINT-CONTROL|RP-PROVIDE-FROM-LAST|SELECT-OPTIONS|SELECTION-SCREEN|"+"START-OF-SELECTION|SUBTRACT-CORRESPONDING|SYNTAX-CHECK|SYNTAX-TRACE|TOP-OF-PAGE|TYPE-POOL|"+"TYPE-POOLS|LINE-SIZE|LINE-COUNT|MESSAGE-ID|DISPLAY-MODE|READ(?:-ONLY)?|"+"IS\\W+(?:NOT\\W+)?(?:ASSIGNED|BOUND|INITIAL|SUPPLIED)";this.$rules={"start":[{token:"string",regex:"`",next:"string"},{token:"string",regex:"'",next:"qstring"},{token:"doc.comment",regex:/^\*.+/},{token:"comment",regex:/".+$/},{token:"invalid",regex:"\\.{2,}"},{token:"keyword.operator",regex:/\W[\-+%=<>*]\W|\*\*|[~:,\.&$]|->*?|=>/},{token:"paren.lparen",regex:"[\\[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"constant.numeric",regex:"[+-]?\\d+\\b"},{token:"variable.parameter",regex:/sy|pa?\d\d\d\d\|t\d\d\d\.|innnn/},{token:"keyword",regex:c},{token:"variable.parameter",regex:/\w+-\w[\-\w]*/},{token:k,regex:"\\b\\w+\\b"},{caseInsensitive:true}],"qstring":[{token:"constant.language.escape",regex:"''"},{token:"string",regex:"'",next:"start"},{defaultToken:"string"}],"string":[{token:"constant.language.escape",regex:"``"},{token:"string",regex:"`",next:"start"},{defaultToken:"string"}]};};o.inherits(A,T);e.AbapHighlightRules=A;});ace.define("ace/mode/folding/coffee",[],function(r,e,m){"use strict";var o=r("../../lib/oop");var B=r("./fold_mode").FoldMode;var R=r("../../range").Range;var F=e.FoldMode=function(){};o.inherits(F,B);(function(){this.getFoldWidgetRange=function(s,f,a){var b=this.indentationBlock(s,a);if(b)return b;var c=/\S/;var l=s.getLine(a);var d=l.search(c);if(d==-1||l[d]!="#")return;var g=l.length;var h=s.getLength();var i=a;var j=a;while(++a<h){l=s.getLine(a);var k=l.search(c);if(k==-1)continue;if(l[k]!="#")break;j=a;}if(j>i){var n=s.getLine(j).length;return new R(i,g,j,n);}};this.getFoldWidget=function(s,f,a){var l=s.getLine(a);var i=l.search(/\S/);var n=s.getLine(a+1);var p=s.getLine(a-1);var b=p.search(/\S/);var c=n.search(/\S/);if(i==-1){s.foldWidgets[a-1]=b!=-1&&b<c?"start":"";return"";}if(b==-1){if(i==c&&l[i]=="#"&&n[i]=="#"){s.foldWidgets[a-1]="";s.foldWidgets[a+1]="";return"start";}}else if(b==i&&l[i]=="#"&&p[i]=="#"){if(s.getLine(a-2).search(/\S/)==-1){s.foldWidgets[a-1]="start";s.foldWidgets[a+1]="";return"";}}if(b!=-1&&b<i)s.foldWidgets[a-1]="start";else s.foldWidgets[a-1]="";if(i<c)return"start";else return"";};}).call(F.prototype);});ace.define("ace/mode/abap",[],function(r,e,m){"use strict";var R=r("./abap_highlight_rules").AbapHighlightRules;var F=r("./folding/coffee").FoldMode;var a=r("../range").Range;var T=r("./text").Mode;var o=r("../lib/oop");function M(){this.HighlightRules=R;this.foldingRules=new F();}o.inherits(M,T);(function(){this.lineCommentStart='"';this.getNextLineIndent=function(s,l,t){var i=this.$getIndent(l);return i;};this.$id="ace/mode/abap";}).call(M.prototype);e.Mode=M;});(function(){ace.require(["ace/mode/abap"],function(m){if(typeof module=="object"&&typeof exports=="object"&&module){module.exports=m;}});})();
