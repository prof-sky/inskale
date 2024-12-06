// #####################################################################################################################
// ##################################              GLOBALS            ##################################################
// #####################################################################################################################

let state = new StateObject();
let colors = new ColorDefinitions();
let selectorBuilder = new SelectorBuilder();
let languageManager = new LanguageManager();
let conf = null;
let packageManager = null;
let circuitMapper = null;
let pageManager;

// #####################################################################################################################
// ##################################              MAIN            #####################################################
// #####################################################################################################################
// The navigation for this website is not via different html files, but by showing and not
// showing different containers that act as pages
// #####################################################################################################################

async function main() {
    disableStartBtnAndSimplifierLink();
    conf = new Configurations();
    await conf.initialize();
    packageManager = new PackageManager();
    await packageManager.initialize();

    // Setup landing page first to make sure nothing else is shown at start
    pageManager = new PageManager(document);
    pageManager.setupLandingPage();
    pageManager.showLandingPage();
    pageManager.setupNavigation();
    pageManager.setupCheatSheet();
    // Selector page is set up when start button is clicked

    setupDarkModeSwitch();
    enableStartBtnAndSimplifierLink();
}
