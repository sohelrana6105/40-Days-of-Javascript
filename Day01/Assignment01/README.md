# Task 01 Note

### <script src="script.js"></script> inside the head

In html document inside the head when script tag is added then its download the script tag before html loaded and rendering . Its created problem beacuse if inside the script tag has any code that related to dcoument taht its throw error . Because before html redndering when js will be executed than I wont find any html document and it will throw error like this ` Uncaught TypeError: Cannot set properties of null (setting 'innerHTML')` .
On the otherhand if the script tag has not any document realeted code then it will loaded first and then html loaded . html cant parse or loaded before script tag load and its slows perforemence

### <script async src="script.js"></script> inside the head

If script tag has inside the head and it is async than html and js file will download or parse at the same time but if that script tag has any dom related execution that it will execute and pasuse the the html downloded done . its works parallal that the good thing but not guranted the code will always work perfectly it will behaves unspectedly and its saves time but still have a problme if there is any dom that has not downloaded yet in than it will throw error like this ` script.js:6 Failed to execute 'write' on 'Document': It isn't possible to write into a document from an asynchronously-loaded external script unless it is explicitly opened.` ❌ If the script executes before the DOM is ready it also will throw `Uncaught TypeError: Cannot set properties of null (setting 'innerHTML') . 
`

### <script async src="script.js"></script> inside the body

Now if script tag inside the body in the last it will works well . Because when document will loaded fully then after js will parse or loaded after that it will execute . but still have a problem that is performance issue it will take time . here solves the problem that is **defer**

### <script defer src="script.js"></script>

inside the script tag defer perfectly works . Because **Dom and Js file ** is load at the same time parallal . And the beautiful thing is it only works when dom is loaded fully . Its save time and works perfectly . So the best practive is use **defer** inside the script tag
