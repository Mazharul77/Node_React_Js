key_area = document.getElementById("key_display");

window.addEventListener("keydown", (event) => {
    key_area.innerHTML = `
    <div class="container key_tab_area">
        <table>
        <tr>
            <th>Key (key)</th>
            <th class="deprecated">ASCII Value (.keyCode): Deprecated</th>
            <th class="latest">ASCII Value (.key.charCodeAt(0)): Latest</th>
            <th>Key Code Description (code)</th>
        </tr>

        <tr>
            <td> ${event.key === " " ? "Space" : event.key} </td>
            <td class="deprecated"> ${event.keyCode} </td>
            <td class="latest"> ${event.key.charCodeAt(0)} </td>
            <td> ${event.code} </td>

        </tr>
        </table>
</div>
`;   
})