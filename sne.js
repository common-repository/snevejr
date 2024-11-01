let snefnugs_count = 130;

if (typeof total !== 'undefined'){
    snefnugs_count = total;
}


// This function allows you to turn on and off the sne
function toggle_sne() {
    let check_box = document.getElementById("toggle_sne");
    if (check_box.checked == true) {
        document.getElementById('sne').style.display = "block";
    }
    else {
        document.getElementById('sne').style.display = "none";
    }
}

// lav snefnug
function spawn_sne(sne_density = 200) {
    sne_density -= 1;

    for (let x = 0; x < sne_density; x++) {
        let board = document.createElement('div');
        board.className = "snefnug";

        document.getElementById('sne').appendChild(board);
    }
}

// Append style for each snefnug to the head
function add_css(rule) {
    let css = document.createElement('style');
    css.type = 'text/css';
    css.appendChild(document.createTextNode(rule)); // Support for the rest
    document.getElementsByTagName("head")[0].appendChild(css);
}



// Math
function random_int(value = 100){
    return Math.floor(Math.random() * value) + 1;
}

function random_range(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Create style for snefnug
function spawnsneCSS(sne_density = 200){
    let snefnug_name = "snefnug";
    let rule = ``;
    if (typeof base_css !== 'undefined'){
        rule = base_css;
    }

    for(let i = 1; i < sne_density; i++){
        let random_x = Math.random() * 100; // vw
        let random_offset = random_range(-100000, 100000) * 0.0001; // vw;
        let random_x_end = random_x + random_offset;
        let random_x_end_yoyo = random_x + (random_offset / 2);
        let random_yoyo_time = random_range(30000, 80000) / 100000;
        let random_yoyo_y = random_yoyo_time * 100; // vh
        let random_scale = Math.random();
        let fall_duration = random_range(10, 30) * 1; // s
        let fall_delay = random_int(30) * -1; // s
        let opacity_ = Math.random();

        rule += `
        .${snefnug_name}:nth-child(${i}) {
            opacity: ${opacity_};
            transform: translate(${random_x}vw, -10px) scale(${random_scale});
            animation: fall-${i} ${fall_duration}s ${fall_delay}s linear infinite;
        }

        @keyframes fall-${i} {
            ${random_yoyo_time*100}% {
                transform: translate(${random_x_end}vw, ${random_yoyo_y}vh) scale(${random_scale});
            }

            to {
                transform: translate(${random_x_end_yoyo}vw, 100vh) scale(${random_scale});
            }

        }
        `
    }

    add_css(rule);
}

// Load the rules and execute after the DOM loads
window.onload = function() {
    spawnsneCSS(snefnugs_count);
    spawn_sne(snefnugs_count);
};

// TODO add progress bar for slower clients
