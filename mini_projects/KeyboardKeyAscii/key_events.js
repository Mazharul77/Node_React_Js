key_area = document.getElementById("key_display");

window.addEventListener("keydown", (event) => {
    key_area.innerHTML = `
    <div class="container key_tab_area">
        <table>
        <tr>
            <th>Key (key)</th>
            <th>ASCII Value (keyCode)</th>
            <th>Key Code Description (code)</th>
        </tr>

        <tr>
            <td> ${event.key === " " ? "Space" : event.key} </td>
            <td> ${event.keyCode} </td>
            <td> ${event.code} </td>

        </tr>
        </table>
</div>
`;   
})