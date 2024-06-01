function vypocet_stromov() {
    let pocet_km = parseInt($("#km").val());
    let vozidlo = $("#vozidlo").val();

    if (!pocet_km) {
        $("#vysledok").val("Neboli zadané všetky hodnoty");
    }

    else if (pocet_km < 0) {
        $("#vysledok").val("Boli zadané záporné hodnoty");
    } else {
        if (vozidlo === "auto") {
            let vysledok = pocet_km * 158;
            $("#vysledok").val(vysledok + " g emisií CO2");
        }
        else if (vozidlo === "vlak") {
            let vysledok = pocet_km * 14;
            $("#vysledok").val(vysledok + " g emisií CO2");
        } else {
            let vysledok = pocet_km * 258;
            $("#vysledok").val(vysledok + " g emisií CO2");
        }
    }
    
}

gsap.registerPlugin(ScrollTrigger);

$('DOMContentLoaded', () => {
    gsap.utils.toArray('.carousel, .nadpis_obal, .uvod, .card, .o_nas, .galeria, .kontakt').forEach(section => {
        gsap.fromTo(section, 
            { opacity: 0, y: 50 }, 
            { opacity: 1, y: 0, 
              duration: 1,
              scrollTrigger: {
                  trigger: section,
                  start: 'top 80%', 
                  toggleActions: 'play none none none', 
              }
            }
        );
    });
});
