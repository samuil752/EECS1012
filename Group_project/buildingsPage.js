function display() {
    document.getElementById('findBuild').style.display = 'block';
    document.getElementById('btnID').style.display = 'inline-block';
    document.getElementById('show').style.display = 'none';



}
function hide() {
    document.getElementById('findBuild').style.display = 'none'
    document.getElementById('show').style.display = 'inline-block';
    document.getElementById('btnID').style.display = 'none';


}

function zoomIn() {
    document.getElementById('build').style.width = '200%'

}
function zoomOut() {
    document.getElementById('build').style.width = '100%'

}

function openBar() {
    document.getElementById('side').style.width = '20%';
    document.getElementById('main').style.marginLeft = '20%';
    document.getElementById('footerinfo').style.marginLeft = '20%';
    document.getElementById('main').style.filter = 'brightness(50%)';
    document.getElementById('footer').style.filter = 'brightness(50%)';
    document.getElementById('body').style = 'Background-image:url("Images/download .png")';

}

function closeBar() {
    document.getElementById('side').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
    document.getElementById('footerinfo').style.marginLeft = '0';
    document.getElementById('main').style.filter = 'none';
    document.getElementById('footer').style.filter = 'none'
    document.getElementById('body').style = 'Background-image:url("Images/download.png")';



}

function search() {
    const searchedItem = (document.getElementById("searcheditem").value).toLowerCase().replaceAll(' ', '');
    const searchList = [
        "ACE", "Accolade Building East",
        // "ACW", "Accolade Building West",
        // "AO", "Archives of Ontario",
        // "ATK", "Atkinson",
        "BC", "Norman Bethune College",
        "BCSS", "Bennett Centre for Student Services",
        "BRG", "Bergeron Centre for Engineering Excellence",
        "BSB", "Behavioural Sciences Building",
        "BU", "Burton Auditorium",
        "CB", "Chemistry Building",
        // "CC", "Calumet College",
        "CFA", "The Joan & Martin Goldfarb Centre for Fine Arts",
        // "CFT", "Centre for Film and Theatre",
        "CLH", "Curtis Lecture Halls",
        "CMB", "Computer Methods Building",
        "CSQ", "Central Square",
        // "CUB", "Central Utilities Building",
        // "DB", "Dahdaleh Building",
        "ELC", "Executive Learning Centre",
        // "FC", "Founders College",
        // "FL", "Frost Library",
        "FRQ", "Farquharson Life Sciences",
        // "FTC",	"Founders Tennis Court",
        // "GH",	"Glendon Hall",
        // "HC",	"Lorna R.Marsden Honours Court & Welcome Centre",
        "HH",	"Hart House",
        "HNE",	"Health Nursing and Environmental Studies Building",
        // "HR",	"Hilliard Residence",
        "IKB",	"Ignat Kaneff Building",
        // "K",	"Kinsmen Building",
        // "KT",	"Kaneff Tower",
        // "LAS",	"Lassonde Building",
        // "LMP",	"LA & PS @IBM Markham",
        // "LSB",	"Life Sciences Building",
        // "LUM",	"Lumbers Building",
        // "MB",	"Rob and Cheryl McEwen Graduate Study & Research Building",
        // "MC",	"McLaughlin College",
        // OC	Off Campus(contact the department that offers the course)
        // PR	Physical Resources Building
        // PSE	Petrie Science and Engineering Building / Petrie Observatory
        // R N	Ross Building - North wing
        // R S	Ross Building - South wing
        // SAY	Seneca @York
        // SC	Stong College
        "SCL",	"Scott Library",
        // SHR	Sherman Health Science Research Centre
        // SLH	Stedman Lecture Halls
        // SSB	Seymour Schulich Building
        // ST	Sheridan College - Trafalgar Campus
        // STC	Student Centre
        // STL	Steacie Science and Engineering Library
        // TC Sobeys	Tennis Canada(TC Sobeys)
        // TEL	Technology and Enhanced Learning Building(effective summer 2016, Dahdaleh Building, DB)
        // TFC	Track and Field Centre
        // TM Tait	Tait McKenzie Centre(East / West)
        // TTC	Tait Tennis Courts
        // VC	Vanier College
        "VH",	"Vari Hall",
        // WC	Winters College
        // WOB	West Office Building
        "WSC",	"William Small Centre",
        // YH	York Hall(Glendon campus)
        "YL",	"York Lanes"
        // YSF FLDHSE	York Student Fieldhouse(East / West)(Tait McKenzie Building)
        // YSF FLDHSEE	York Student Fieldhouse(East side only)(Tait McKenzie Building)
        // YSF FLDHSEW	York Student Fieldhouse(West side only)(Tait McKenzie Building)
    ];
    var len = searchList.length;
    let flag = false;
    var hyperlink = "something.html"
    for (i = 0; i < len; i++) {
        searchList[i] = searchList[i].toLowerCase().replaceAll(' ', '');
        if (searchedItem === searchList[i]) {
            if (i % 2 == 0) {
                searchList[i + 1] = searchList[i + 1].toLowerCase().replaceAll(' ', '');
                hyperlink = "build/" + searchList[i + 1] + ".html";
            } else {
                hyperlink = "build/" + searchedItem + ".html";
            }
            window.open(hyperlink, "_self");
            flag = true;
            break;
        }
    }
    if (flag == false) {
        const popupWidth = 300; //in px
        const popupHeight = 200; //in px
        const popupLink = 'popup1Errormessege.html';
        window.open(popupLink, 'popup', `width=${popupWidth}, height=${popupHeight}, top=${((window.innerHeight - popupHeight) / 2)}, left=${((window.innerWidth - popupWidth) / 2)}`);
        //window.open(URL, name, specs, replace)
        //window.innerHeight/Width is the height/width of the content of the current window in pixels
        //document.getElementById("...").style.backgroundColor = hsl(0, 0, 40); <--BACKGROUND DARKENED/ BLURRED
    
    
    }

}

function searchTwo() {
    const searchedItem = (document.getElementById("searcheditem").value).toLowerCase().replaceAll(' ', '');
    const searchList = [
        "ACE", "Accolade Building East",
        // "ACW", "Accolade Building West",
        // "AO", "Archives of Ontario",
        // "ATK", "Atkinson",
        "BC", "Norman Bethune College",
        "BCSS", "Bennett Centre for Student Services",
        "BRG", "Bergeron Centre for Engineering Excellence",
        "BSB", "Behavioural Sciences Building",
        "BU", "Burton Auditorium",
        "CB", "Chemistry Building",
        // "CC", "Calumet College",
        "CFA", "The Joan & Martin Goldfarb Centre for Fine Arts",
        // "CFT", "Centre for Film and Theatre",
        "CLH", "Curtis Lecture Halls",
        "CMB", "Computer Methods Building",
        "CSQ", "Central Square",
        // "CUB", "Central Utilities Building",
        // "DB", "Dahdaleh Building",
        "ELC", "Executive Learning Centre",
        // "FC", "Founders College",
        // "FL", "Frost Library",
        "FRQ", "Farquharson Life Sciences",
        // "FTC",	"Founders Tennis Court",
        // "GH",	"Glendon Hall",
        // "HC",	"Lorna R.Marsden Honours Court & Welcome Centre",
        "HH",	"Hart House",
        "HNE",	"Health Nursing and Environmental Studies Building",
        // "HR",	"Hilliard Residence",
        "IKB",	"Ignat Kaneff Building",
        // "K",	"Kinsmen Building",
        // "KT",	"Kaneff Tower",
        // "LAS",	"Lassonde Building",
        // "LMP",	"LA & PS @IBM Markham",
        // "LSB",	"Life Sciences Building",
        // "LUM",	"Lumbers Building",
        // "MB",	"Rob and Cheryl McEwen Graduate Study & Research Building",
        // "MC",	"McLaughlin College"
        // OC	Off Campus(contact the department that offers the course)
        // PR	Physical Resources Building
        // PSE	Petrie Science and Engineering Building / Petrie Observatory
        // R N	Ross Building - North wing
        // R S	Ross Building - South wing
        // SAY	Seneca @York
        // SC	Stong College
        "SCL",	"Scott Library",
        // SHR	Sherman Health Science Research Centre
        // SLH	Stedman Lecture Halls
        // SSB	Seymour Schulich Building
        // ST	Sheridan College - Trafalgar Campus
        // STC	Student Centre
        // STL	Steacie Science and Engineering Library
        // TC Sobeys	Tennis Canada(TC Sobeys)
        // TEL	Technology and Enhanced Learning Building(effective summer 2016, Dahdaleh Building, DB)
        // TFC	Track and Field Centre
        // TM Tait	Tait McKenzie Centre(East / West)
        // TTC	Tait Tennis Courts
        // VC	Vanier College
        "VH",	"Vari Hall",
        // WC	Winters College
        // WOB	West Office Building
        "WSC",	"William Small Centre",
        // YH	York Hall(Glendon campus)
        "YL",	"York Lanes"
        // YSF FLDHSE	York Student Fieldhouse(East / West)(Tait McKenzie Building)
        // YSF FLDHSEE	York Student Fieldhouse(East side only)(Tait McKenzie Building)
        // YSF FLDHSEW	York Student Fieldhouse(West side only)(Tait McKenzie Building)
    ];
    var len = searchList.length;
    let flag = false;
    var hyperlink = "something.html"
    for (i = 0; i < len; i++) {
        searchList[i] = searchList[i].toLowerCase().replaceAll(' ', '');
        if (searchedItem === searchList[i]) {
            if (i % 2 == 0) {
                searchList[i + 1] = searchList[i + 1].toLowerCase().replaceAll(' ', '');
                hyperlink = searchList[i + 1] + ".html";
            } else {
                hyperlink = searchedItem + ".html";
            }
            window.open(hyperlink, "_self");
            flag = true;
            break;
        }
    }
    if (flag == false) {
        const popupWidth = 300; //in px
        const popupHeight = 200; //in px
        const popupLink = '../popup1Errormessege.html';
        window.open(popupLink, 'popup', `width=${popupWidth}, height=${popupHeight}, top=${((window.innerHeight - popupHeight) / 2)}, left=${((window.innerWidth - popupWidth) / 2)}`);
        //window.open(URL, name, specs, replace)
        //window.innerHeight/Width is the height/width of the content of the current window in pixels
        //document.getElementById("...").style.backgroundColor = hsl(0, 0, 40); <--BACKGROUND DARKENED/ BLURRED
    
    
    }

}

function enter(x) {
    if (x.key==="Enter") {
        search();
    }
}

function enterTwo(x) {
    if (x.key==="Enter") {
        searchTwo();
    }
}