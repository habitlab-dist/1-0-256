System.registerDynamic("npm:prettyprintjs@0.1.12.json",[],!0,function(){return{main:"index.js",format:"cjs",meta:{"*.json":{format:"json"}}}}),System.registerDynamic("npm:prettyprintjs@0.1.12/index.js",[],!0,function(a,b,c){"use strict";var d=this||self;c.exports=function(f,g,h,i,j){var k,l,m,n,p,q,r,s,t,u,v,w,x,y,z;return n=Object.prototype.toString,y=0,j||(j=10),p={undefined:"undefined",number:"number",boolean:"boolean",string:"string",symbol:"symbol","[object Function]":"function","[object RegExp]":"regexp","[object Array]":"array","[object Date]":"date","[object Error]":"error"},q=function(A){var B=p[typeof A]||p[n.call(A)]||(A?"object":"null");return B},r=function(A,B){var D,C="";for(D=0;D<B;D+=1)C+=A;return C},t=function(A,B){var D,C=[];for(D in B+=k,A)if(A.hasOwnProperty(D))try{C.push(B+"\""+D+"\": "+x(A[D],B))}catch(E){C.push(B+"\""+D+"\": "+x("unprintable",B))}return C.join(m)+l},u=function(A,B){if(y>j)return"[object]";y+=1;var D,C=[];for(D in B+=k,A)if(A.hasOwnProperty(D))try{C.push(B+D+": "+x(A[D],B))}catch(E){C.push(B+D+": "+x("unprintable",B))}return C.join(m)+l},v=function(A,B){var C,D=A.length,E=[];for(B+=k,C=0;C<D;C+=1)E.push(x(A[C],B,B));return E.join(m)+l},w=function(A){var B,C;return A=A.toString(),B=/function\s*.*\s*\(.*\)/,C=B.exec(A),C=C?C[0]:"[object Function]",i?A:"\""+C+"\""},x=function(A,B,C){var D;return D=q(A),C=C||"",-1===z.indexOf(A)?"array"===D?(z.push(A),0===A.length?C+"[ ]":C+"["+l+v(A,B)+B+"]"):"boolean"===D?C+(A?"true":"false"):"date"===D?C+"\""+A.toString()+"\"":"number"===D?C+A:"object"===D?(z.push(A),0===Object.keys(A).length?C+"{ }":C+"{"+l+s(A,B)+B+"}"):"string"===D?C+JSON.stringify(A):"function"===D?C+w(A):"undefined"===D?C+"undefined":"null"===D?C+"null":A.toString?C+"\""+A.toString()+"\"":C+"<<<ERROR>>> Cannot get the string value of the element":A&&"function"==typeof A.toString?C+"circular reference to "+A.toString():C+"circular reference"},"string"==typeof f?f:"boolean"==typeof f||"number"==typeof f?f.toString():f?(void 0===g&&(g=4),h=(h||"print").toLowerCase(),k=r("html"===h?"&nbsp;":" ",g),s="print"===h?u:t,l="html"===h?"<br/>":"\n",m=","+l,z=[],x(f,"")+l):null===f?"null":void 0===f?"undefined":"Error: no Javascript object provided"}});

