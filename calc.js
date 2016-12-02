/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

var myNamespace = {};

myNamespace.round = function(number, precision) {
    var factor = Math.pow(10, precision);
    var tempNumber = number * factor;
    var roundedTempNumber = Math.round(tempNumber);
    return roundedTempNumber / factor;
};

function setOneDecimal(sel) {
    if(sel.value < .5){
        sel.value = .5;
    }
    //sel.value = parseFloat(sel.value).toFixed(1);
    sel.value = myNamespace.round(sel.value, 1);
}

function calcUpdateNew() {
    var form = document.querySelector('input[name="form"]:checked').value;
    var shape = document.querySelector('input[name="shape"]:checked').value;
    
    if(form == 1){
        if(shape == 1){
            cubeYardHtml();
        } else {
            yardHtml();
        }
    } else {
        if(shape == 1){
            cubeTonHtml();
        } else {
            tonHtml();
        }
    }
}

function yardCalc(){
    var width = document.getElementById('width').value;
    var length = document.getElementById('length').value;
    var depth = document.getElementById('depth').value;
    
    var newOutput = (length*width*(depth/12))/27;
    newOutput = parseFloat(newOutput).toFixed(2);

    var oldOutput = document.getElementById("output");
    
    oldOutput.innerHTML = newOutput + " Cubic Yards";
    
}

function cubeYardCalc(){
    var diameter = document.getElementById('diameter').value;
    var depth = document.getElementById('depth').value;
    
    var newOutput = (3.14159*((diameter/2)*(diameter/2)))*(depth/12)/27;
    newOutput = parseFloat(newOutput).toFixed(2);
    var oldOutput = document.getElementById("output");
    
    oldOutput.innerHTML = newOutput + " Cubic Yards";
}

function tonCalc(){
    var width = document.getElementById('width').value;
    var length = document.getElementById('length').value;
    var depth = document.getElementById('depth').value;
    var materialWeight = document.getElementById('material').value;
 
    var newOutput = ((length*width*(depth/12))/27)*materialWeight;
    newOutput = parseFloat(newOutput).toFixed(2);
    var oldOutput = document.getElementById("output");
    
    oldOutput.innerHTML = newOutput + " Tons";
}

function cubeTonCalc(){
    var diameter = document.getElementById('diameter').value;
    var depth = document.getElementById('depth').value;
    var materialWeight = document.getElementById('material').value;
 
    var newOutput = ((3.14159*(diameter/2)*(diameter/2)*( depth/12))/27)*materialWeight;
    newOutput = parseFloat(newOutput).toFixed(2);
    var oldOutput = document.getElementById("output");
    
    oldOutput.innerHTML = newOutput + " Tons";
    
}

function yardHtml(){
    var calcOption = document.getElementById('calcLoc');
    
    calcOption.innerHTML = '<table id="yardTable">\
                <tr>\
                    <th>Length (ft):</th>\
                    <td>\
                        <input type="number" onchange="setOneDecimal(this); yardCalc();" id="length" value="1" min=".5" step=".1">\
                    </td>\
                </tr>\
                <tr>\
                    <th>Width (ft):</th>\
                    <td>\
                        <input type="number" onchange="setOneDecimal(this); yardCalc();" id="width" value="1" min=".5" step=".1">\
                    </td>\
                </tr>\
                <tr>\
                    <th>Depth (in):</th>\
                    <td>\
                        <select id="depth" onchange="yardCalc()">'  + depthHtml + '</td>\
                </tr>\
                <tr>\
                    <th>Estimated Quantity Needed:</th>\
                    <td id="output" onchange="yardCalc()"></td>\
                </tr>\
            </table>';

}

function cubeYardHtml(){
    var calcOption = document.getElementById('calcLoc');
    
    calcOption.innerHTML = '<table id="cubeYardCalc">\
                <tr>\
                    <th>Diameter (ft):</th>\
                    <td><input type="number" onchange="setOneDecimal(this); cubeYardCalc();" id="diameter" value="1" min=".5" step=".1"></td>\
                </tr>\
                <tr>\
                    <th>Depth (in):</th>\
                    <td>\
                        <select id="depth" onchange="cubeYardCalc()">'  + depthHtml + '</td>\
                </tr>\
                <tr>\
                    <th>Estimated Quantity Needed:</th>\
                    <td id="output"></td>\
                </tr>\
            </table>'; 
}

function tonHtml(){
   var calcOption = document.getElementById('calcLoc');
    
    calcOption.innerHTML = '<table id="tonTable">\
                <tr>\
                    <th>Material</th>\
                    <td>\
                        <select id="material" onchange="tonCalc()">' + materialHtml + '</td>\
                </tr>\
                <tr>\
                    <th>Length (ft):</th>\
                    <td>\
                        <input type="number" onchange="setOneDecimal(this); tonCalc();" id="length" value="1" min=".5" step=".1">\
                    </td>\
                </tr>\
                <tr>\
                    <th>Width (ft):</th>\
                    <td>\
                        <input type="number" onchange="setOneDecimal(this); tonCalc();" id="width" value="1" min=".5" step=".1">\
                    </td>\
                </tr>\
                <tr>\
                    <th>Depth (in):</th>\
                    <td>\
                        <select id="depth" onchange="tonCalc()">' + depthHtml + '</td>\
                </tr>\
                <tr>\
                    <th>Estimated Quantity Needed:</th>\
                    <td id="output"></td>\
                </tr>\
            </table>'; 
}

function cubeTonHtml(){
    var calcOption = document.getElementById('calcLoc');
    
    calcOption.innerHTML = '<table id="tonTable">\
                <tr>\
                    <th>Material</th>\
                    <td>\
                        <select id="material" onchange="cubeTonCalc()">' + materialHtml + '</td>\
                </tr>\
                <tr>\
                    <th>Diameter (ft):</th>\
                    <td>\
                        <input type="number" onchange="setOneDecimal(this); cubeTonCalc();" id="diameter" value="1" min=".5" step=".1">\
                    </td>\
                </tr>\
                <tr>\
                    <th>Depth (in):</th>\
                    <td>\
                        <select id="depth" onchange="cubeTonCalc()">' + depthHtml + '</td>\
                </tr>\
                <tr>\
                    <th>Estimated Quantity Needed:</th>\
                    <td id="output"></td>\
                </tr>\
            </table>';
    
}

var depthHtml = '<option value="1">1</option>\
                <option value="1.5">1.5</option>\
                <option value="2">2</option>\
                <option value="3">3</option>\
                <option value="4">4</option>\
                <option value="5">5</option>\
                <option value="6">6</option>\
                <option value="7">7</option>\
                <option value="8">8</option>\
                <option value="9">9</option>\
                <option value="10">10</option>\
                <option value="11">11</option>\
                <option value="12">12</option>\
                <option value="13">13</option>\
                <option value="14">14</option>\
                <option value="15">15</option>\
                <option value="16">16</option>\
                <option value="17">17</option>\
                <option value="18">18</option>\
                <option value="19">19</option>\
                <option value="20">20</option>\
                <option value="21">21</option>\
                <option value="22">22</option>\
                <option value="23">23</option>\
                <option value="24">24</option>\
                <option value="25">25</option>\
                <option value="26">26</option>\
                <option value="27">27</option>\
                <option value="28">28</option>\
                <option value="29">29</option>\
                <option value="30">30</option>\
                <option value="31">31</option>\
                <option value="32">32</option>\
                <option value="33">33</option>\
                <option value="34">34</option>\
                <option value="35">35</option>\
                <option value="36">36</option>\
            </select>';

var materialHtml = '<option value="0.6076">Asphalt, crushed</option>\
                            <option value="0.9177">Clay, dry excavated</option>\
                            <option value="1.5388">Clay, wet excavated</option>\
                            <option value="0.9042">Clay, dry lump</option>\
                            <option value="1.3500">Clay, wet lump</option>\
                            <option value="1.4713">Clay, compacted</option>\
                            <option value="0.9312">Coal, Anthracite, broken</option>\
                            <option value="0.7020">Coal, Bituminous, broken</option>\
                            <option value="1.0525">Soil, loam, dry, excavated</option>\
                            <option value="1.2152">Soil, moist, excavated</option>\
                            <option value="1.3500">Soil, wet, excavated</option>\
                            <option value="1.6871">Soil, dense</option>\
                            <option value="1.4579">Soil, soft loose mud</option>\
                            <option value="1.2826">Soil, packed</option>\
                            <option value="1.4174">Gravel, dry 1/4 to 2 inch</option>\
                            <option value="1.6871">Gravel, wet 1/4 to 2 inch</option>\
                            <option value="1.1747">Limestone, pulverized</option>\
                            <option value="1.3500">Rip-Rap</option>\
                            <option value="1.6197">Sand, wet</option>\
                            <option value="1.7545">Sand, wet, packed</option>\
                            <option value="1.3500">Sand, dry</option>\
                            <option value="1.4174">Sand, rammed</option>\
                            <option value="1.1882">Sandstone, crushed</option>\
                            <option value="1.3365">Shale, broken</option>\
                            <option value="1.3500">Stone, crushed</option>\
                        </select>';