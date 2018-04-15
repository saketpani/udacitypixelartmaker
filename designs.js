$(function () {

    //app constants
    const appConstants = {
        trStart: "<tr>",
        trEnd: "</tr>",
        td: "<td></td>",
        defaultCellBackColor: "rgba(0, 0, 0, 0)",
        cssBackgroundColor: "background-color"
    };


    // When size is submitted by the user, call makeGrid()
    $("#sizePicker").on("submit", function (e) {
        makeGrid();
        e.preventDefault();
    });

    /**
     * This function makes the grid based on height and width input
     */
    function makeGrid() {

        const height = $("#inputHeight").val();
        const width = $("#inputWeight").val();

        let canvas = $("#pixelCanvas");
        canvas.empty();

        let tableStructure = "";

        for (let rowIndex = 0; rowIndex < height; rowIndex++) {
            
            // add <tr>
            tableStructure += appConstants.trStart;

            for (let colIndex = 0; colIndex < width; colIndex++) {
                tableStructure += appConstants.td;
            }

            // add </tr>
            tableStructure += appConstants.trEnd;
        }

        canvas.append(tableStructure);

        // add click event for each td to toggle the background color
        $("td").on("click", function (e) {
            toggleColor($(this));
        });
    }

    /**
     * Toggles the background color of the cell
     * @param {*} target the table cell target 
     */
    function toggleColor(target) {
        const colorPicker = $("#colorPicker").val();

        target.css(appConstants.cssBackgroundColor,
            target.css(appConstants.cssBackgroundColor) === appConstants.defaultCellBackColor ?
            colorPicker : appConstants.defaultCellBackColor);
    }
});