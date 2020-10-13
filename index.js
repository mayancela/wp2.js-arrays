window.onload = function() { //event hooking being used to prevent style == null
    container();
    function container() {
        const random_button = document.getElementById('random');
        const monochrome_button_b = document.getElementById('monochromatic-b');
        const monochrome_button_p = document.getElementById('monochromatic-p');
        const bg_image_button = document.getElementById('bg-image');
        const bg_image_remove_button = document.getElementById('bg-image-remove');
        const body = document.querySelector('body');
        const random_colors = ['#79E359', '#E69D68', '#4DBCD5', '#2C76D6', '#CC6012', '#AD0000', '#FFE4B7', '#8975FF'];
        const monochrome_colors_b = ['#A0D2E7', '#81B1D5', '#3D60A7', '#26408B'];
        const monochrome_colors_p = ['#FFB6D5', '#FF99CC', '#F47DBB', '#D94496'];
        const random_images = ['images/bg-1.jpg'];
        var count = 0;

        body.style.backgroundColor = '#eee';
        // body.style.backgroundImage = "url('images/bg-1.jpg')";
        random_button.addEventListener('click', chooseRandomColor);
        monochrome_button_b.addEventListener('click', chooseBlueMonochromaticColor);
        monochrome_button_p.addEventListener('click', choosePinkMonochromaticColor);
        bg_image_button.addEventListener('click', chooseRandomImage);
        bg_image_remove_button.addEventListener('click', removeBgImage);


        function chooseRandomColor() {
            const colorIndex= parseInt(Math.random()*random_colors.length);
            body.style.backgroundColor = random_colors[colorIndex];
            console.log("Array length: " + random_colors.length);
            console.log("Index number chosen: " + colorIndex);
        }
        function chooseRandomImage() {
            const imageIndex= parseInt(Math.random()*random_images.length);
            body.style.backgroundImage = "url(" + random_images[imageIndex] + ")";
            console.log("Array length: " + random_images.length);
            console.log("Index number chosen: " + imageIndex);
        }

        function removeBgImage() {
            body.style.backgroundImage = "none";
        }

        function chooseBlueMonochromaticColor() {
            var length =  monochrome_colors_b.length;
            console.log("Array length: " + length);
            console.log("Index is at: " + count);

            if(count != length) {
                body.style.backgroundColor = monochrome_colors_b[count];
                count++;
            }
            else {
                count = 0;
                body.style.backgroundColor = monochrome_colors_b[count];
                count++;
            }
        }

        function choosePinkMonochromaticColor() {
            var length =  monochrome_colors_p.length;
            console.log("Array length: " + length);
            console.log("Index is at: " + count);

            if(count != length) {
                body.style.backgroundColor = monochrome_colors_p[count];
                count++;
            }
            else {
                count = 0;
                body.style.backgroundColor = monochrome_colors_p[count];
                count++;
            }

        }
    }
}
