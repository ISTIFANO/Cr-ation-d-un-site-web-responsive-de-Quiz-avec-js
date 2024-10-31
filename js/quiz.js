function test() {
    const v = document.getElementById("btn");
    const A = document.getElementsByTagName("body")[0]; // Access the first body element
    const cr = document.createElement("h1");
    
    v.addEventListener("click", function() {
        cr.innerHTML = "w9"; // Correct syntax to set inner HTML
       cr.append(body);
    });
}
