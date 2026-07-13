```
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
    // Second Example Vehicle
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
// Fill HTML Data
// ===============================


function loadVehicleData(vehicle) {


    const data = vehicle.data;



    Object.keys(data).forEach(key => {


        const element = document.getElementById(key);


        if(element){

            element.textContent = data[key];

        }


    });


}









// ===============================
// Detect URL Route
// ===============================


function getVehicleFromRoute(){


    let path = window.location.pathname;



    // remove ending slash

    if(path.length > 1 && path.endsWith("/")){

        path = path.slice(0,-1);

    }



    return vehicles.find(vehicle =>

        vehicle.route.toLowerCase() === path.toLowerCase()

    );

}











// ===============================
// Mobile Menu
// ===============================


function setupMobileMenu(){


    const menuButton =
    document.querySelector(".mobile-menu-button");


    const mobileMenu =
    document.getElementById("mobileMenu");



    if(!menuButton || !mobileMenu){

        return;

    }





    menuButton.addEventListener("click",()=>{


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
    .forEach(link=>{


        link.addEventListener("click",()=>{


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
// Start
// ===============================


document.addEventListener(
"DOMContentLoaded",
()=>{


    setupMobileMenu();



    const vehicle =
    getVehicleFromRoute();



    if(vehicle){


        loadVehicleData(vehicle);


    }

    else{


        console.log(
            "No vehicle found for this route"
        );


    }



});
```
