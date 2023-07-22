
// 控制输入框中的tab键缩进
const textareas = document.querySelectorAll('.tab-indent');
// 监听所有 textarea 的按键按下事件
textareas.forEach(textarea => {
  textarea.addEventListener('keydown', function (event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      const value = this.value;
      const start = this.selectionStart;
      const end = this.selectionEnd;
      const tabCharacter = '  '; // 或其他您想要的缩进字符
      this.value = value.substring(0, start) + tabCharacter + value.substring(end);
      this.selectionStart = this.selectionEnd = start + tabCharacter.length;
    }
  });
});

var inputTextElement = document.getElementById("input");
var outputTextElement = document.getElementById("output");
inputTextElement.addEventListener('input', formatText);


function formatText() {
      var lines = inputTextElement.value.split("\n");
      var outlineNumbers = [];
      var output = "";

      for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        if (line.trim() === "") {
          output += "\n";
        } else {
          var indentLevel =Math.ceil((line.match(/^\s*/) || [])[0].length / 2);
          while (outlineNumbers.length <= indentLevel) {
            outlineNumbers.push(0);
          }
          console.log("1",outlineNumbers)
          while (outlineNumbers.length > indentLevel + 1) {
            outlineNumbers.pop();
          }
          outlineNumbers[indentLevel]++;

          var outlineNumber = outlineNumbers.slice(0, indentLevel + 1).join(".") + ". ";
          var indentedLine = "  ".repeat(indentLevel) + outlineNumber + line.trim();
          output += indentedLine + "\n";
        }
      }
      outputTextElement.value = output;
    }

    function copyToClipboard() {
      var outputTextElement = document.getElementById("output");
      outputTextElement.select();
      document.execCommand("copy");
    }
