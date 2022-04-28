//30. Pierwsze co robimy teraz w js to pobieramy potzrebne nam elementy, najpierw wszystkie nasze przyciski: startBtn, pauseBtn, stopBtn, resetBtn, historyBtn. Pobieramy też paragrafy stopwatch, time, i listę timelist. Pobieramy też infoBtn czyli nasz znak pomocy, nastepnie modalShadow, i closeMoadalBtn.

const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const historyBtn = document.querySelector('.history');
const stopwatch = document.querySelector('.stopwatch');
const time = document.querySelector('.time');
const timeList = document.querySelector('.time-list');

const infoBtn = document.querySelector('.fa-question');
const modalShadow = document.querySelector('.modal-shadow');
const closeModalBtn = document.querySelector('.close');

//34. Więc możemy stworzyć nową zmienną countTime
let countTime;
//36. Tworzymy dwie zmienne globalne minutes i seconds.
let minutes = 0;
let seconds = 0;

//58. Więc stwórzmy sobie pustą tablicę na początku kodu.
let timesArr = [];

// zmiana kolorów
const colorBtn = document.querySelector('.fa-paint-brush');
const colorPanel = document.querySelector('.colors');
const colorOne = document.querySelector('.one');
const colorTwo = document.querySelector('.two');
const colorThree = document.querySelector('.three');
let root = document.documentElement;

//31. Teraz tworzymy sobie funkcję która będzie startowała nasz tiimer czyli handleStart().
const handleStart = () => {
    
    //47. Zajmiemy się teraz innym waznym problemem. Bo jak raz klikniemy przycisk startBtn to wszystko łądnie m=nam chodzi i sekundy zmieniają się co sekundę o jeden, ale jak doklikniemy sobie przycisk startBtn raz czy nawet kilka razy to za kazdym razem robi się w tym timerze cyrk. Chodzi o to że ten setInterval nam głupieje wtedy. Jak można to poprawić. Mamy coś takiego jak clearInterval. Czyli jakby w tym momencie czyścimy nasz interval. Tu w nawiasie tej funkcji clearInterval podajemy nazwę naszej zmiennej countTime. I to nam załątwia problem,że jak klikamy wielokrotnie przycisk startBtn to nam timer głupieje. Ale jednocześnie nie da się nie zauważyć, że z każdym kolejnym klknięciem przycisku startBtn w trakcie chodzenia timera, on zatrezymuje się na sekundę.
    clearInterval(countTime);

    //33. Teraz tak, jak klikniemy na przycisk startBtn, to będziemy chcieli żeby nasz timer sie zaktualizował,żeby nasz czas rósł o sekundę. Czyli wiemy że jakaś wartość ma się zmieniać o jeden i że ta wartość ma sie zmieniać co sekundę. Mamy cos takiego jak setInterval, czyli że cos ma sie wykonywać co okreslony przez nas czas. 
    //35. Odwołamy się do naszego countTime i damy sobie tutaj setInterval, ustwaimy czas co który ma sie to aktualizowac czyli co sekunde czyli 1000 milisekund. Jesli chodzi o argumenty nie podajemy tutaj nic, ale stworzymy sobie jeszcze dwie zmienne globalne.
    countTime = setInterval(() => {
        //39. Więc odwołujemy się za pomoca if. Czyli jeżeli zminna seconds będzie mniejsxza niż 9 
        if (seconds < 9) {
            //37. I teraz zwiększamy sekundy o jeden. Jak odpalimy konsolę ,to po kliknieciu startBtn będą nam wyskaiwały w konsoli kolejne sekundy.
            console.log(seconds);
            //40. To wtedy zwiuększamy liczbę sekund o jeden
            seconds++;
            //38. Żeby to pokazywało się nie w konsoli, ale normalnie an naszej stronie to teraz odwołamy sie do paragrafu stopwatch i do jego zawartości czyli do textContent i tu za pomocą templatestringa pobieramy zmienne minutes i seconds, czyli `${minutes}:0${seconds}`. Robi się coś dziwnego, bo nie sprawdzamy czy doszło juz do 10 sekund, żeby zaktualizowac kolejna cyfrę. Bo jak będziemy mieli np. 60 sekund to będziemy chcieli zaktualizować ta naszą pierwsza cyfrę czyli minuty. Czyli będziemy musieli sprawdzać czy jakiś warunek juz został spełniony czy tez jeszcze nie. Czy ta ostatnia cyfra zwraca juz liczbe większa niź 9
            //41. I uzupełniamy textContent w ten sposób `${minutes}:0${seconds}`
            stopwatch.textContent = `${minutes}:0${seconds}`;
            //42. Jak będziemy mieli tę naszą 9 to będziemy chcieli zwiększyć ilośc sekund o jeden. Musimy więc sprawdzić sobie tu dwa warunki czy liczba sekund jest większa lub równa  9 oraz czy ta liczba jest mniejsza niż 59. No bo jesli ta liczba będzie większa niż 59, to nie będziemy chcieli żeby w sekundach pohjawiało nam się 60, 61 itd, tylko bedzimy chcieli zwiększyć wtedy liczbę minut
        } else if (seconds >= 9 && seconds < 59) {
            seconds++;
            //43. Tu już 0 przed ${seconds} nie potrezbujuemy, ponieważ ta nsza zmienna seconds będzie przechowywała wartość 10.
            stopwatch.textContent = `${minutes}:${seconds}`;
            //44. Kiedy osiągniemy w sekundach liczbe 60 to chcemy zwiększyć liczbę minut o jeden
        } else {
            minutes++;
            //45. Wyzerowujemy nasze sekundy,żeby to odliczanie znowu rozpoczęło się na nowo
            seconds = 0;
            //46. I wyświetlamy zawartośc stopwatcha w ten sposób `${minutes}:00`
            stopwatch.textContent = `${minutes}:00`;
        }
    }, 100);
}

//51. Teraz tworzymy funkcję handleStop()
const handleStop = () => {
    //52. Pierwsze co będziemy chcieli zrobić to po wciśnięciu przycisku stopBtn będziemy chcieli zatrzymać timer czyli czyścimy nasz interval. 
    // clearInterval(countTime);
    //53. Ale oprócz tego będziemy chcieli żeby ten nasz timer się zerował. Więc możemy odwołac sie do zmiennej stopwatch, która własnie przechowuje w sobie ten tekst i żeby on wrócił do wartości początkowej "0:00".
    // stopwatch.textContent = "0:00";
    //54. Dodamy tutaj jeszce jedną linijkę kodu która wyjaśni się gdy dojdziemy do archiwum. chodzi o to że jak klikniemy przycisk archiwum to pokaże nam się cała lista naszych archiwalnych czasów i w momencie kiedy klikniemy stop, to będziemy chcieli żeby to archiwum nam się schowało. 
    // timeList.textContent = "";
    //55. Zauważamy że gdy klikamy play i stop, to w konsoli zmienna seconds przechowuje kolejne czasy. Więc mozemy sobie wyzerowac te dwie nasze zmienne seconds i minutes.
    // seconds = 0;
    // minutes = 0;

    //57. Musimy jeszcze w jakiś sposób podmienić treść stopwatcha z "0:00" na to co faktycznie jest. Odwołujemy się więc do zmiennej time. Robimy to poza ifem. Odwołujemy się do jego innerHTML i tu w grawisie dajemy `Ostatni czas: ${stopwatch.textContent}`. Treaz ostatnią rzeczą która chcielibyśmy zrobić to jak przechwycić te wyniki. Bo my nigdzie nie przechowujemy informacji o naszym czasie. Robimy takie przygotowania pod naszą funkcję która będzie potem sprawdzała nasze archiwum. Czy amamy w js coś co przechowa nam naszą treść, informację, ze możemy to tam wrzucić i ona tam będzie sobie siedziałą. Mmay obiekty, ale mamy tez tablice. Więc stwórzmy sobie pustą tablicę na początku kodu.
    time.innerHTML = `Ostatni czas: ${stopwatch.textContent}`;

    //56. Chcielibyśmy teraz żeby w momencie kiedy wciskamy przycisk stop żeby nam pokazał sie paragraf time. Ale nie chcemy żeby on pokazywał się zawsze. Więc robimy instrukcję warunkową i sprawdzamy naszego stopwatcha. Jeżeli textContent stopwatcha jest rózny od "0:00", to wtedy będziemy chcieli że ten paragraf time się pokazał czyli odwołamy się do jego widoczności w  stylach i ustawimy na "visible".
    if (stopwatch.textContent !== '0:00') {
        time.style.visibility = 'visible';
       
        //59. Jak możemy dodac coś do naszej tablicy. Mmay metodę push. Możemy odwołąc się do naszej tablicy. Jeżeli nasz stoper będzie różny niż "0:00", to taki czas będziemy chcieli dodac do naszej tablicy. Co pushujemy. Pushujemy zawartość naszego paragrafu stopwatch.
        timesArr.push(stopwatch.textContent);
    };

    //63. Przechodzimy do funkcji handleStop() i kasujemy to co jest treścią funkcji clearStuff() i wywołujemy na końcu tej funkcji funkcję clearStuff().
    clearStuff();
}

//48. Tworzymy teraz funkcję handlePause(). 
const handlePause = () => {
    //49. W jej ciele czyścimy interval na tej samej zasadzie co w funkcji handleStart, czyli clearInterval(countTime).
    clearInterval(countTime);
}

//60. Tworzymy funkcję handleReset(), która będzie nam resetowałą stoper. Będziemy chcieliw pierwszym kroku zatrzymać stoper, następnie będziemy chcieli go wyczyścić i wszystkie czasy. Będziemy chcieli wyczyścić całą naszą listę archiwum. Będziemy chcieli sprowadzić do 0 wszystkie nasze sekundy i minuty. Więc robimy w sumie częściowo to samo co robiliśmy w poprzedniej funkcji czyli w handleStop. Moglibysmy w takim razie przekopiować sobie z poprzedniej funkcji ten fragment kodu i go do tej funkcji wkleić. Tylko po co. Można zrobić to w mądrzejszy sposób. Bo w tym momencie się powtarzamy, czyli robimy głupotę. Więc stworzymy nową funkcję clearStuff().
const handleReset = () => {
    //64. Wracamy do funkcji handleReset i chcielibyśmy żeby po naciśnięciu przycisku resetBtn paragraf time nam znikał, wię ustwiamy jego widocznośc na "hidden".
    time.style.visibility = 'hidden';
    //65. Chcielibyśmy jeszcze w tej naszej funkcji handleReset wyczyścić całe nasze archiwum, a konkretnie tę naszą tablicę timesArr.
    timesArr = [];
    //62. Wracamy do funkcji handleReset i wywołujemy funkcję clearStuff().
    clearStuff();
}

//61. Tworzymy nową funkcję clearStuff(). Wewnątrz tej funkcji wklejamy tę częśc kodu która nam się powtarza. Czyli to co czyści nam interval, zawartość tekstową stopwatcha, listę wyników z archiwum, sekundy i minuty.
const clearStuff = () => {
    clearInterval(countTime);
    stopwatch.textContent = '0:00';
    timeList.textContent = '';
    seconds = 0;
    minutes = 0;
}

//67. Tworzymy funkcję showHistory(), która będzie odpowiedzialna za wypisanie listy czasów, wyników po kliknięciu przycisku archiwum
const showHistory = () => {
    //72. Musimy jeszcze na samym początku wyczyścić naszą listę. To takie zabezpieczenie. I dopiero jak ta lista będzie pusta to odpali się nasza pętla.
    timeList.textContent = '';
    //73. Ten X z `Pomiar nr X: <span>${time}</span>`, jest bez sensu, więc tworzymy sobie zmienną num i na początku przypisujemy jej wartość 1.
    let num = 1;

    //68. W ciele tej funkcji odwołujemy się do naszej tablicy timesArr i robimy na niej pętlę forEach. 
    timesArr.forEach(time => {
        //69. My chcemy ten nasz argument, ten nasz time czyli pojedyńczy element tablicy, wypisac w ul liście. nasza ul lista jest w tym momencie całkowicie pusta. Więc musimy sobie dodać jakieś li chociaż. Jak można dodać li. Najpierw musimy je stworzyć. Więc tworzymy zmienną newTime, której przypisujemy nowo utworzony li. Czyli w tym momencie ta pętla za każdym razem, dla każdego naszego elementu stworzy li.
        const newTime = document.createElement('li');
        //70. Teraz musimy powiedzieć co musi się znaleźć w tym naszym li, więć odwołujemy się do naszego nowego elementu newTime, do jego innerHTML i przypisujemy tu w grawisie `Pomiar nr X: <span>${time}</span>`.
        //74. I teraz wracamy do pętli i tam gdzie mamy nasz pomiar X to pobieramy naszą zmienną num przy pomocy znaku $.
        newTime.innerHTML = `Pomiar nr ${num}: <span>${time}</span>`;

        //71. Teraz musimy ten nowy element to li dodac do naszej listy wyników.
        timeList.appendChild(newTime);
        //75. Po dodaniu już li do listy, chcemy zwiększyć tę naszą zmienną num o jeden.
        num++;
    })
}

//77. Tworzymy funkcję showModal(), która będzie odpowiedzialna za pojawianie się modalu po kliknięciu znaku pytajnika, pomocy. W css domyślnie modalShadow ma display ustawione na none.
const showModal = () => { 
    //78. Więc najoierw sprawdzamy jak ustawiony jest dispaly dla modalShadow. Sprawdzamy czy modalShadow ma display block i robimy tego zaprzeczenie. 
    if (!(modalShadow.style.display === 'block')) {
        //79. Jeżeli ten warunek zwróci anm true, to będziemy chcieli ustwić display dla modalShadow na "block"
        modalShadow.style.display = 'block';
    } else {
        //80. W innym przypadku ustwaiamy display dla modalShadow na "none"
        modalShadow.style.display = 'none';
    };

    //81. Chcemy jeszcze uruchomić animację dla modalShadow która zdefiniowaliśmy w cssie, żeby to okienko ten modal nie pojawiał się tak od razu. Więc odwołujemy sie do modalShadow do jego classListy i robimy przełącznik toggle na klasę .modal-animation, określoną w cssie. Będziemy chcieli jeszcze zamknąć ten nasz modal, można to zrobić w ten sposób żeby kliknąć przycisk "zamknij" w modalu, ale możemy tez to zrobić klikając gdzieś poza modalem. Moglibyśmy wieć stworzyć kolejną funkcję closeModal czy coś takiego. No ale to by było bez sensu. Poniewaz my tutaj w tej funkcji showModal w instrukcji warunkowej sobie sprawdzamy
    modalShadow.classList.toggle('modal-animation')
}

//32. Dajemy sobie lisenera, na przycist startBtn.
startBtn.addEventListener('click', handleStart);
//50. Oczywiście musimy zrobić listenera na przycisk pauseBtn żeby wywołać naszą funkcję handlePause
pauseBtn.addEventListener('click', handlePause);
//52. Musimy zrobić lisenera na przycisk stopBtn zeby wywołać funkcję handleStop
stopBtn.addEventListener('click', handleStop);
//61. Musimy zrobić lisenera na przycisk resetBtn  żeby wywołąc funkcję handleReset
resetBtn.addEventListener('click', handleReset);
//66. Robimy lisenera na przycisk historyBtn, żeby wywołąc funkcję showHistory
historyBtn.addEventListener('click', showHistory);

//76. Robimy listenera na przycisk infoBtn, żeby wywołac funkcję showModal
infoBtn.addEventListener('click', showModal);
//82. Odwołujemy się do closeModalBtn i tu wywołujemy funkcję showModal. Teraz musimy się dowiedzieć jak zamykać modalShadow klikając poza naszym modalem. 
closeModalBtn.addEventListener('click', showModal);
//83. Żeby to zrobić odwołamy się do całego naszego okna przeglądarki, nadamy listenera i będziemy wysłuchiwali na clicka i po przecinku zapisujemy sobie funkcję anonimową w postaci operatora trójargumentowego. Przechwytujemy tutaj event stąd argument e, czyli click. Czyli w momencie kiedy klikniemy, to chcemy sprawdzić czy to gdzie kliknęliśmy czyli event.target jest równy modalShadow, czyli czy klikniemy w nasz modalShadow (to jest ta nasza klasa która dodaje nam cień) i teraz jeżeli faktycznie klikniemy to wtedy chcemy wywołać naszą funkcję showModal a w innym przypadku dajemy sobie false. Będziemy teraz zmieniali paletę kolorów tego naszego stopera. Więc po pierwsze dodamy sobie nową ikonę, nowy przycisk. Ten przycisk będzie wysuwał nam takie małe boczne menu z prawej strony a w nim będziemy mieli takie oktręgi z różnym tłęm. I tak na prawdę jeżeli kliniemy na to tło, na to kółko to zmienimy cały kolor w tym naszym stoperze.
window.addEventListener('click', e => e.target === modalShadow ? showModal() : false);


// zmiana kolorów
colorBtn.addEventListener('click', () => {
    colorPanel.classList.toggle('show-colors')
})

colorOne.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(250, 20, 6)');
    root.style.setProperty('--hover-color', 'rgb(209, 33, 24)');
});

colorTwo.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(6, 173, 250)');
    root.style.setProperty('--hover-color', 'rgb(28, 145, 199)');
});

colorThree.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(0, 255, 42)');
    root.style.setProperty('--hover-color', 'rgb(28, 209, 58)');
});