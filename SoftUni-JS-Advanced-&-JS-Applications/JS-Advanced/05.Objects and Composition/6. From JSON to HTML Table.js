function fromJSONToHTMLTable(input){
        
    let arr = JSON.parse(input);
    let outputArr = ["<table>"];
    console.log("<table>")
    header=Object.keys(arr[0])
    //console.log(header)
    outputArr.push(makeKeyRow(header));
    arr.forEach((obj) => outputArr.push(makeValueRow(obj)));
    outputArr.push("</table>");
    console.log("</table>")
    function makeKeyRow(header) { 
        let rowStr="   <tr>"
        for (let i=0;i<header.length;i++){
            rowStr+="<th>"
            rowStr+=header[i]
            rowStr+="</th>"
        }
        rowStr+="</tr>"
        outputArr.push(rowStr)
        console.log(rowStr)
 
    }
    
    function makeValueRow(obj) {
        let rowStr="   <tr>"
        for (let i=0;i<header.length;i++){
            rowStr+="<td>"
            rowStr+=escapeHtml(obj[header[i]])
            rowStr+="</td>"
        }
        rowStr+="</tr>"
        outputArr.push(rowStr)
        console.log(rowStr)
    };
    
    function escapeHtml(value) {        
         let entityMap = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            ' ': '&nbsp;',
        };
        return value.toString().replace(/[&<> "]/g, (value) => entityMap[value]);};
    
    //console.log(outputArr.join("\n"));
    //return outputArr.join('\n')
 
}