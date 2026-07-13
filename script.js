"use strict";


// ===============================
// Vehicle Database
// ===============================

const vehicles = [

    // ===============================
    // Toyota Hilux
    // URL: https://gso-org.site/#/toyota
    // ===============================

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

            productionMonth: "1",
            productionYear: "2026",

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


    // ===============================
    // Kia Sportage
    // URL: https://gso-org.site/#/kia
    // ===============================

    {
        route: "/kia",

        data: {

            ccrNumber: "782341",

            approvedDate: "15 February 2026",

            manufacturer: "KIA Corporation",

            vehicleName: "KIA SPORTAGE",

            vehicleDescription:
                "(NQ5) 2.0L SUV AWD 5 Doors",

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
// Store Original Page Content
// ===============================

let originalPageContent = "";


// ===============================
// Fill HTML Data
// ===============================

function loadVehicleData(vehicle) {

    const data = vehicle.data;

    Object.keys(data).forEach((key) => {

        const element = document.getElementById(key);

        if (element) {
            element.textContent = data[key];
        }

    });

}


// ===============================
// Normalize Hash Route
// ===============================

function normalizeRoute(hash) {

    let route = hash.trim().toLowerCase();

    // Remove the # character
    route = route.replace(/^#/, "");

    // Add slash when the user writes #toyota
    if (route && !route.startsWith("/")) {
        route = `/${route}`;
    }

    // Remove duplicate ending slashes
    route = route.replace(/\/+$/, "");

    // Default vehicle when there is no hash route
    if (!route) {
        route = "/toyota";
    }

    return route;

}


// ===============================
// Detect Vehicle From Hash Route
// ===============================

function getVehicleFromRoute() {

    const currentRoute = normalizeRoute(
        window.location.hash
    );

    return vehicles.find((vehicle) => {

        const vehicleRoute =
            vehicle.route.toLowerCase().replace(/\/+$/, "");

        return vehicleRoute === currentRoute;

    });

}


// ===============================
// Vehicle Not Found Page
// ===============================

function showVehicleNotFound() {

    const route =
        normalizeRoute(window.location.hash);

    document.title = "Vehicle Not Found";

    document.body.innerHTML = `
        <main style="
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 30px;
            background: #f5f5f5;
        ">
            <div style="
                width: 100%;
                max-width: 600px;
                padding: 40px;
                box-sizing: border-box;
                background: #ffffff;
                border-radius: 12px;
                box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
            ">
                <h1 style="
                    margin-top: 0;
                    margin-bottom: 15px;
                    font-size: 34px;
                ">
                    Vehicle not found
                </h1>

                <p style="
                    margin-bottom: 10px;
                    color: #555555;
                ">
                    No vehicle is configured for this route:
                </p>

                <strong style="
                    display: block;
                    margin-bottom: 30px;
                    font-size: 18px;
                    word-break: break-word;
                ">
                    ${escapeHtml(route)}
                </strong>

                <a
                    href="#/toyota"
                    style="
                        display: inline-block;
                        margin: 5px;
                        padding: 12px 20px;
                        color: #ffffff;
                        background: #111111;
                        text-decoration: none;
                        border-radius: 6px;
                    "
                >
                    Open Toyota
                </a>

                <a
                    href="#/kia"
                    style="
                        display: inline-block;
                        margin: 5px;
                        padding: 12px 20px;
                        color: #111111;
                        background: #eeeeee;
                        text-decoration: none;
                        border-radius: 6px;
                    "
                >
                    Open Kia
                </a>
            </div>
        </main>
    `;

}


// ===============================
// Protect Text Inserted Into HTML
// ===============================

function escapeHtml(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


// ===============================
// Restore Original HTML Page
// ===============================

function restoreOriginalPage() {

    if (
        originalPageContent &&
        document.body.innerHTML !== originalPageContent
    ) {
        document.body.innerHTML = originalPageContent;
        setupMobileMenu();
    }

}


// ===============================
// Render Vehicle
// ===============================

function renderVehicle() {

    const vehicle = getVehicleFromRoute();

    if (!vehicle) {

        console.error(
            "No vehicle found for hash route:",
            window.location.hash
        );

        showVehicleNotFound();
        return;

    }

    restoreOriginalPage();

    loadVehicleData(vehicle);

    document.title = vehicle.data.vehicleName;

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

    /*
     * Prevent adding the same click listener more than once
     * when the original page is restored.
     */
    if (menuButton.dataset.menuReady === "true") {
        return;
    }

    menuButton.dataset.menuReady = "true";

    menuButton.addEventListener("click", () => {

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

    });

    mobileMenu
        .querySelectorAll("a")
        .forEach((link) => {

            link.addEventListener("click", () => {

                mobileMenu.classList.remove("open");

                menuButton.classList.remove("open");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

}


// ===============================
// Start Website
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    /*
     * Save the original HTML so it can be restored
     * after displaying the vehicle-not-found page.
     */
    originalPageContent = document.body.innerHTML;

    setupMobileMenu();

    renderVehicle();

});


// ===============================
// Update Page When Hash Changes
// ===============================

window.addEventListener("hashchange", () => {

    renderVehicle();

});
