window.onload = function() { //event hooking being used to prevent style == null
    container();
    function container() {
        const random_button = document.getElementById('random');
        const monochrome_button = document.getElementById('monochromatic');
        const body = document.querySelector('body');
        const random_colors = ['#79E359', '#E69D68', '#4DBCD5', '#2C76D6', '#CC6012', '#AD0000', '#FFE4B7', '#8975FF'];
        const monochrome_colors = ['#BBDFFA', '#97BAEC', '#445BC1', '#2C43B8', '#1727AE'];
        var count = 0;

        body.style.backgroundColor = '#eee';
        random_button.addEventListener('click', chooseRandomColor);
        monochrome_button.addEventListener('click', chooseMonochromaticColor);

        function chooseRandomColor() {
            const colorIndex= parseInt(Math.random()*random_colors.length);
            body.style.backgroundColor = random_colors[colorIndex];
            console.log("Array length: " + random_colors.length);
            console.log("Index number chosen: " + colorIndex);
        }

        function chooseMonochromaticColor() {
            var length =  monochrome_colors.length;
            console.log("Array length: " + length);
            console.log("Index is at: " + count);

            if(count != length) {
                body.style.backgroundColor = monochrome_colors[count];
                count++;
            }
            else {
                count = 0;
                body.style.backgroundColor = monochrome_colors[count];
                count++;
            }

        }
    }
}
