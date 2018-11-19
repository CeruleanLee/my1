
function handleFileSelect(f, isTypedArray) {
    var reader = new FileReader();// 文件阅读器
    reader.onload = (function(file) {
        return function(e) {
            var extension = file.name.split(".")[1];
            if (extension === "amr") {
                var samples = new AMR({
                    benchmark : true
                }).decode(e.target.result);
                AMR.util.play(samples);
            }
        }
    })(f);

    if (!!isTypedArray) {
        reader.readAsArrayBuffer(f);
        return;
    }
    reader.readAsBinaryString(f);
}