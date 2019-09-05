var inf_div = document.getElementById("inf_div");
var nuc_div = document.getElementById("nuc_div");
var mag_div = document.getElementById("mag_div");
var shape1 = document.getElementById("third_circle_1");
var shape2 = document.getElementById("third_circle_2");
var shape3 = document.getElementById("third_circle_3");
var textbox = document.getElementById("textbox");
var magnet_text = document.getElementById("magnet_text");
var nucleon_text = document.getElementById("nucleon_text");
var information_text = document.getElementById("information_text");
var x3d = document.getElementById("x3d");
var close_x3d = document.getElementById("close_x3d");
var magnet_switch = document.getElementById("magnet_switch");
var solenoid_switch = document.getElementById("solenoid_switch");
var trajectory_switch = document.getElementById("trajectory_switch");
var tubes_switch = document.getElementById("tubes_switch");
var wires_switch = document.getElementById("wires_switch");
var buttons_mag = document.getElementById("buttons_mag");
var magnet_button = document.getElementById("magnet_button");
var solenoid_button = document.getElementById("solenoid_button");
var trajectory_button = document.getElementById("trajectory_button");
var tubes_button = document.getElementById("tubes_button");
var wires_button = document.getElementById("wires_button");
var nucleon_collected_switch = document.getElementById("nucleon_collected_switch");
var nucleon_radial_switch = document.getElementById("nucleon_radial_switch");
var nucleon_tangential_switch = document.getElementById("nucleon_tangential_switch");
var nucleon_collected_button = document.getElementById("nucleon_collected_button");
var nucleon_radial_button = document.getElementById("nucleon_radial_button");
var nucleon_tangential_button = document.getElementById("nucleon_tangential_button");
var information_box = document.getElementById("information_box");
var close_info = document.getElementById("close_info");
var description = document.getElementById("description");
var developers = document.getElementById("developers");
var EIC_icon = document.getElementById("EIC_icon");
var Fem_icon = document.getElementById("Fem_icon");

magnet_button.disabled = true;
solenoid_button.disabled = true;
trajectory_button.disabled = true;
tubes_button.disabled = true;
wires_button.disabled = true;
nucleon_collected_button.disabled = true;
nucleon_radial_button.disabled = true;
nucleon_tangential_button.disabled = true;

setTimeout(function() {
	shape1.style.animationName = "third_circle_1_fly_in";
	shape1.style.display = "inline";
	shape2.style.animationName = "third_circle_2_fly_in";
	shape2.style.display = "inline";
	shape3.style.animationName = "third_circle_3_fly_in";
	shape3.style.display = "inline";
	setTimeout(function() {
		magnet_text.style.animationName = "fade_in_text";
		nucleon_text.style.animationName = "fade_in_text";
		information_text.style.animationName = "fade_in_text";
	}, 575);
}, 300);

function information_option() {
	inf_div.style.animationName = "information_clicked";
	information_box.style.zIndex = "12";
	setTimeout(function() {close_info.style.animation = "fade_in_close_info 0.5s forwards";}, 500);
	setTimeout(function() {information_box.style.animation = "grow_information_box_horizontal 0.5s forwards";}, 500);
	setTimeout(function() {
		information_box.style.animation = "grow_information_box_vertical 0.5s forwards";
		description.style.animation = "fade_in 1s forwards";
		developers.style.animation = "fade_in 1s forwards";
		EIC_icon.style.animation = "fade_in 1s forwards";
		Fem_icon.style.animation = "fade_in 1s forwards";
	}, 1000);
}

function nucleon_option() {
	nucleon_collected_button.disabled = false;
	nucleon_radial_button.disabled = false;
	nucleon_tangential_button.disabled = false;
	nuc_div.style.animationName = "nucleon_clicked";
	expand_x3d();
	nucleon_collected_button.style.display = "inline";
	nucleon_radial_button.style.display = "inline";
	nucleon_tangential_button.style.display = "inline";
	nucleon_collected_button.style.animation = "fade_in 1s linear forwards";
	nucleon_radial_button.style.animation = "fade_in 1s linear forwards";
	nucleon_tangential_button.style.animation = "fade_in 1s linear forwards";
	magnet_button.style.display = "none";
	solenoid_button.style.display = "none";
	trajectory_button.style.display = "none";
	tubes_button.style.display = "none";
	wires_button.style.display = "none";
}

function magnet_option() {
	magnet_button.disabled = false;
	solenoid_button.disabled = false;
	trajectory_button.disabled = false;
	tubes_button.disabled = false;
	wires_button.disabled = false;
	mag_div.style.animationName = "magnet_clicked";
	expand_x3d();
	magnet_button.style.display = "inline";
	solenoid_button.style.display = "inline";
	trajectory_button.style.display = "inline";
	tubes_button.style.display = "inline";
	wires_button.style.display = "inline";
	magnet_button.style.animation = "fade_in 1s linear forwards";
	solenoid_button.style.animation = "fade_in 1s linear forwards";
	trajectory_button.style.animation = "fade_in 1s linear forwards";
	tubes_button.style.animation = "fade_in 1s linear forwards";
	wires_button.style.animation = "fade_in 1s linear forwards";
	nucleon_collected_button.style.display = "none";
	nucleon_radial_button.style.display = "none";
	nucleon_tangential_button.style.display = "none";
}

function expand_x3d() {
	x3d.style.animationName = "expand_x3d";
	x3d.style.display = "inline";
	x3d.style.zIndex = "11";
	close_x3d.style.display = "inline";
	close_x3d.style.animationName = "fade_in_close_x3d";
}

function collapse_x3d() {
	x3d.style.animationName = "collapse_x3d";
	close_x3d.style.animationName = "fade_out_close_x3d";
	if (inf_div.style.animationName == "information_clicked") {
		inf_div.style.animationName = "information_closed";
		inf_div.style.animationDuration = "0.7s";
	}
	if (nuc_div.style.animationName == "nucleon_clicked") {
		nuc_div.style.animationName = "nucleon_closed";
		nuc_div.style.animationDuration = "0.7s";
		hide_nuc_buttons();
	}
	if (mag_div.style.animationName == "magnet_clicked") {
		mag_div.style.animationName = "magnet_closed";
		mag_div.style.animationDuration = "0.7s";
		hide_mag_buttons();
	}
	setTimeout(function() {x3d.style.display = "none"; }, 950);
	setTimeout(function() {close_x3d.style.display = "none";}, 950);
}

function toggle_magnet_file() {
	if (magnet_switch.whichChoice == "0") {
		magnet_button.style.animation = "button_toggle_off 0.2s linear forwards";
		magnet_switch.whichChoice = "1";
	}
	else {
		magnet_button.style.animation = "button_toggle_on 0.2s linear forwards";
		magnet_switch.whichChoice = "0";
	}
}

function toggle_solenoid_file() {
	if (solenoid_switch.whichChoice == "0") {
		solenoid_button.style.animation = "button_toggle_off 0.2s linear forwards";
		solenoid_switch.whichChoice = "1";
	}
	else {
		solenoid_button.style.animation = "button_toggle_on 0.2s linear forwards";
		solenoid_switch.whichChoice = "0";
	}
}

function toggle_trajectory_file() {
	if (trajectory_switch.whichChoice == "0") {
		trajectory_button.style.animation = "button_toggle_off 0.2s linear forwards";
		trajectory_switch.whichChoice = "1";
	}
	else {
		trajectory_button.style.animation = "button_toggle_on 0.2s linear forwards";
		trajectory_switch.whichChoice = "0";
	}
}

function toggle_tubes_file() {
	if (tubes_switch.whichChoice == "0") {
		tubes_button.style.animation = "button_toggle_off 0.2s linear forwards";
		tubes_switch.whichChoice = "1";
	}
	else {
		tubes_button.style.animation = "button_toggle_on 0.2s linear forwards";
		tubes_switch.whichChoice = "0";
	}
}

function toggle_wires_file() {
	if (wires_switch.whichChoice == "0") {
		wires_button.style.animation = "button_toggle_off 0.2s linear forwards";
		wires_switch.whichChoice = "1";
	}
	else {
		wires_button.style.animation = "button_toggle_on 0.2s linear forwards";
		wires_switch.whichChoice = "0";
	}
}

function hide_mag_buttons() {
	magnet_button.style.animation = "fade_out 1s linear forwards";
	solenoid_button.style.animation = "fade_out 1s linear forwards";
	trajectory_button.style.animation = "fade_out 1s linear forwards";
	tubes_button.style.animation = "fade_out 1s linear forwards";
	wires_button.style.animation = "fade_out 1s linear forwards";
	
	magnet_button.disabled = true;
	solenoid_button.disabled = true;
	trajectory_button.disabled = true;
	tubes_button.disabled = true;
	wires_button.disabled = true;
	
	magnet_switch.whichChoice = "1";
	solenoid_switch.whichChoice = "1";
	trajectory_switch.whichChoice = "1";
	tubes_switch.whichChoice = "1";
	wires_switch.whichChoice = "1";
}

function toggle_nucleon_collected_file() {
	if (nucleon_radial_switch.whichChoice == "0") {
		toggle_nucleon_radial_file();
	}
	if (nucleon_tangential_switch.whichChoice == "0") {
		toggle_nucleon_tangential_file();
	}
	if (nucleon_collected_switch.whichChoice == "0") {
		nucleon_collected_button.style.animation = "button_toggle_off 0.2s linear forwards";
		nucleon_collected_switch.whichChoice = "1";
	}
	else {
		nucleon_collected_button.style.animation = "button_toggle_on 0.2s linear forwards";
		nucleon_collected_switch.whichChoice = "0";
	}
}

function toggle_nucleon_radial_file() {
	if (nucleon_collected_switch.whichChoice == "0") {
		toggle_nucleon_collected_file();
	}
	if (nucleon_tangential_switch.whichChoice == "0") {
		toggle_nucleon_tangential_file();
	}
	if (nucleon_radial_switch.whichChoice == "0") {
		nucleon_radial_button.style.animation = "button_toggle_off 0.2s linear forwards";
		nucleon_radial_switch.whichChoice = "1";
	}
	else {
		nucleon_radial_button.style.animation = "button_toggle_on 0.2s linear forwards";
		nucleon_radial_switch.whichChoice = "0";
	}
}

function toggle_nucleon_tangential_file() {
	if (nucleon_radial_switch.whichChoice == "0") {
		toggle_nucleon_radial_file();
	}
	if (nucleon_collected_switch.whichChoice == "0") {
		toggle_nucleon_collected_file();
	}
	if (nucleon_tangential_switch.whichChoice == "0") {
		nucleon_tangential_button.style.animation = "button_toggle_off 0.2s linear forwards";
		nucleon_tangential_switch.whichChoice = "1";
	}
	else {
		nucleon_tangential_button.style.animation = "button_toggle_on 0.2s linear forwards";
		nucleon_tangential_switch.whichChoice = "0";
	}
}

function hide_nuc_buttons() {
	nucleon_collected_button.style.animation = "fade_out 1s linear forwards";
	nucleon_radial_button.style.animation = "fade_out 1s linear forwards";
	nucleon_tangential_button.style.animation = "fade_out 1s linear forwards";
	
	nucleon_collected_button.disabled = true;
	nucleon_radial_button.disabled = true;
	nucleon_tangential_button.disabled = true;

	nucleon_collected_switch.whichChoice = "1";
	nucleon_radial_switch.whichChoice = "1";
	nucleon_tangetial_switch.whichChoice = "1";
}

function close_information() {
	close_info.style.animation = "fade_out_close_info 0.5s linear forwards";
	information_box.style.animation = "shrink_information_box_vertical 0.5s forwards";
	description.style.animation = "fade_out 0.5s forwards";
	developers.style.animation = "fade_out 0.4s forwards";
	EIC_icon.style.animation = "fade_out 0.4s forwards";
	Fem_icon.style.animation = "fade_out 0.4s forwards";
	setTimeout(function() {
		information_box.style.animation = "shrink_information_box_horizontal 0.5s forwards";
		npolys_profile.style.zIndex = "0";
		oli_profile.style.zIndex = "0";
	}, 500);
	setTimeout(function() {
		inf_div.style.animationName = "information_closed";
		information_box.style.zIndex = "0";
	}, 1000);
}