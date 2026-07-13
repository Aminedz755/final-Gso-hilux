"use strict";


// ===============================
// Vehicle Database
// ===============================

const vehicles = [

    {
        route: "/toyota",

        data: {
            ccrNumber: "509192",
            approvedDate: "01 January 2026",

            manufacturer: "Toyota Motor Corporation",

            vehicleName: "TOYOTA HILUX",
            vehicleDescription: "(GUN122) 2.4L Pick-up RWD 4 Doors",

            category: "Truck",
            modelYear: "2026",
            country: "THAILAND",

            productionMonth: " 1",
            productionYear: " 2026",

            vin: "MR0CB9CD7S3310269",

            maxWeight: "2810 kg",
            curbWeight: "1800 kg",

            frontAxle: "1200 kg",
            rearAxle: "1750 kg",

            length: "5330 mm",
            width: "1800 mm",
            height: "1700 mm",

            wheelbase: "3085 mm",

            frontTrack: "1510 mm",
            rearTrack: "1510 mm",

            bodyType: "Chassis Frame",

            passengers: "5 (including the driver)",

            engineType: "Diesel",

            cylinders: "4",

            displacement: "2393 cc",

            airIntake: "Turbo",

            enginePower: "110 kW at 3400 rpm",

            pollutantLimit: "Comply with Euro5",

            transmission: "Manual",

            ecall: "Not Provided",

            serviceBrakes: "Hydraulic",

            emergencyBrakes:
                "Combined with the service brake",

            vehicleClass: "Light Truck",

            fuelEconomy: "15.9 km/L",

            fuelRating: "Excellent",

            additionalInformation:
                "Also comply with the National regulations for member countries mentioned in the Annex of the list of Technical Regulations for MV 202MY-D3, when exporting to those countries. The seating reference point of the lowest seat exceeds 700mm from the ground. This vehicle type complies with ECE13. This vehicle is only for Saudi Arabia, Kuwait and Qatar market."
        }
    },


    {
        route: "/kia",

        data: {
            ccrNumber: "782341",
            approvedDate: "15 February 2026",

            manufacturer: "KIA Corporation",

            vehicleName: "KIA SPORTAGE",
            vehicleDescription: "(NQ5) 2.0L SUV AWD 5 Doors",

            category: "SUV",
            modelYear: "2026",
            country: "SOUTH KOREA",

            productionMonth: "3",
            productionYear: "2026",

            vin: "KNAPM81A6T7001234",

            maxWeight: "2200 kg",
            curbWeight: "1650 kg",

            frontAxle: "1100 kg",
            rearAxle: "1200 kg",

            length: "4660 mm",
            width: "1865 mm",
            height: "1660 mm",

            wheelbase: "2755 mm",

            frontTrack: "1615 mm",
            rearTrack: "1622 mm",

            bodyType: "Monocoque Body",

            passengers: "5 (including driver)",

            engineType: "Petrol",

            cylinders: "4",

            displacement: "1999 cc",

            airIntake: "Natural",

            enginePower: "115 kW at 6200 rpm",

            pollutantLimit: "Comply with Euro6",

            transmission: "Automatic",

            ecall: "Provided",

            serviceBrakes: "Hydraulic Disc",

            emergencyBrakes:
                "Electronic Parking Brake",

            vehicleClass: "Passenger Vehicle",

            fuelEconomy: "14.5 km/L",

            fuelRating: "Very Good",

            additionalInformation:
                "This vehicle complies with applicable Gulf technical regulations and safety standards."
        }
    }

];


// ===============================
// Read and Normalize Hash Route
// ===============================

function getCurrentRoute() {

    let route = window.location.hash;

    // Remove "#"
    route = route.replace(/^#/, "");

    // Remove spaces
    route = route.trim();

    // Use Toyota when the URL has no hash
    if (!route) {
        return "/toyota";
    }

    // Support both #toyota and #/toyota
    if (!route.startsWith("/")) {
        route = "/" + route;
    }

    // Remove trailing slashes
    route = route.replace(/\/+$/, "");

    return route.toLowerCase();

}


// ===============================
// Find Vehicle
// ===============================

function findVehicleByRoute(route) {

    return vehicles.find(function (vehicle) {

        return vehicle.route.toLowerCase() === route;

    });

}


// ===============================
// Clear Existing Vehicle Values
// ===============================

function clearVehicleData() {

    const vehicleKeys = Object.keys(vehicles[0].data);

    vehicleKeys.forEach(function (key) {

        const element = document.getElementById(key);

        if (element) {
            element.textContent = "";
        }

    });

}


// ===============================
// Insert Vehicle Data Into HTML
// ===============================

function loadVehicleData(vehicle) {

    clearVehicleData();

    const data = vehicle.data;

    Object.keys(data).forEach(function (key) {

        const element = document.getElementById(key);

        if (!element) {

            console.warn(
                "Missing HTML element with id:",
                key
            );

            return;

        }

        element.textContent = data[key];

    });

    document.title =
        data.vehicleName + " - Vehicle Conformity";

}


// ===============================
// Display Vehicle Not Found
// ===============================

function showVehicleNotFound(route) {

    clearVehicleData();

    document.title = "Vehicle Not Found";

    const vehicleName =
        document.getElementById("vehicleName");

    const vehicleDescription =
        document.getElementById("vehicleDescription");

    if (vehicleName) {
        vehicleName.textContent = "VEHICLE NOT FOUND";
    }

    if (vehicleDescription) {
        vehicleDescription.textContent =
            "No vehicle is configured for route " + route;
    }

}


// ===============================
// Render Current Route
// ===============================

function renderVehicle() {

    const currentRoute = getCurrentRoute();

    const vehicle =
        findVehicleByRoute(currentRoute);

    console.log("script.js loaded successfully");
    console.log("Current hash:", window.location.hash);
    console.log("Current route:", currentRoute);

    if (!vehicle) {

        console.error(
            "No vehicle found for route:",
            currentRoute
        );

        showVehicleNotFound(currentRoute);

        return;

    }

    console.log(
        "Vehicle loaded:",
        vehicle.data.vehicleName
    );

    loadVehicleData(vehicle);

}


// ===============================
// Mobile Menu
// ===============================

function setupMobileMenu() {

    const menuButton =
        document.querySelector(".mobile-menu-button");

    const mobileMenu =
        document.getElementById("mobileMenu");

    if (!menuButton || !mobileMenu) {
        return;
    }

    menuButton.addEventListener(
        "click",
        function () {

            const isOpen =
                mobileMenu.classList.toggle("open");

            menuButton.classList.toggle(
                "open",
                isOpen
            );

            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        }
    );

    const mobileLinks =
        mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                mobileMenu.classList.remove("open");

                menuButton.classList.remove("open");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    });

}


// ===============================
// Start Website
// ===============================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        setupMobileMenu();
        renderVehicle();

    }
);


// ===============================
// Update When Hash Changes
// ===============================

window.addEventListener(
    "hashchange",
    function () {

        renderVehicle();

    }
);
