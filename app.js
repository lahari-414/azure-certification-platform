
const videoScripts = {
  1: [
    "Welcome to Module 1 of the Microsoft Azure Fundamentals Course. In this module we will cover Cloud Computing concepts and all the Azure Core Services you need to know for the AZ-900 certification.",
    "Cloud computing is the delivery of computing services over the internet, including servers, storage, databases, networking, software, analytics, and intelligence to offer faster innovation and flexible resources.",
    "Before cloud computing, every company had to buy and manage their own physical servers. This required significant upfront capital investment, large IT teams, and ongoing maintenance costs.",
    "With Microsoft Azure, you simply use the resources you need and pay only for what you consume. Azure is Microsoft's cloud platform with over 200 products and cloud services designed to help you bring new solutions to life.",
    "There are three main cloud service models. Infrastructure as a Service, or IaaS, provides virtualized computing resources over the internet. You manage the operating system, storage, and applications.",
    "Platform as a Service, or PaaS, provides hardware and software tools over the internet. Developers can build applications without managing the underlying infrastructure, saving time and reducing complexity.",
    "Software as a Service, or SaaS, delivers software applications over the internet on a subscription basis. Microsoft 365 is a great example — users access it through a web browser with no local installation needed.",
    "Azure Virtual Machines are one of Azure's most popular IaaS offerings. They allow you to create and use virtual machines in the cloud, with full control over the operating system and installed software.",
    "Azure Blob Storage is Microsoft's object storage solution for the cloud. It is optimized for storing massive amounts of unstructured data such as text, images, videos, and backups.",
    "Azure App Service is a fully managed platform for building, deploying, and scaling web applications. It supports multiple programming languages including .NET, Java, Ruby, Node.js, PHP, and Python.",
    "Azure Functions is Microsoft's serverless computing service. It allows you to run event-triggered code without having to provision or manage infrastructure. You only pay for the time your code runs.",
    "Azure SQL Database is a fully managed relational database service built on Microsoft SQL Server. It handles patching, backups, monitoring, and high availability automatically so you can focus on development.",
    "Azure Cosmos DB is Microsoft's globally distributed, multi-model database service. It supports multiple data models including documents, key-value, graphs, and column-family — all through one service.",
    "Azure Kubernetes Service, or AKS, simplifies deploying and managing containerized applications using Kubernetes. It handles the complexity of Kubernetes so you can focus on building great applications.",
    "Azure Virtual Network allows you to create private networks in the cloud and securely connect Azure resources to each other, to on-premises networks, and to the internet.",
    "Azure Content Delivery Network, or CDN, delivers high-bandwidth content to users worldwide by caching content at strategically placed physical nodes across the globe, reducing latency significantly.",
    "The core benefits of Azure include massive scalability to handle any workload, global reach across 60-plus regions worldwide, integrated tools and services, enterprise-grade security, and compliance with over 90 regulatory standards.",
    "Together, Virtual Machines, Blob Storage, App Service, Azure Functions, SQL Database, and Cosmos DB form the powerful foundation of almost every application built on Microsoft Azure. Excellent work — you have completed Module 1!"
  ],
  2: [
    "Welcome to Module 2 of the Microsoft Azure Fundamentals Course. In this module we will cover Azure Security, Identity and Access Management, Governance, Pricing Models, and Azure's Global Infrastructure.",
    "Security is Microsoft's top priority for Azure. Azure provides a comprehensive set of security tools and capabilities to help you protect your data, applications, and infrastructure in the cloud.",
    "Azure Active Directory, now called Microsoft Entra ID, is Microsoft's cloud-based identity and access management service. It helps your employees sign in and access resources securely.",
    "With Azure Active Directory you can implement Single Sign-On, allowing users to access thousands of applications with one set of credentials. This simplifies the user experience and reduces password fatigue.",
    "Multi-Factor Authentication adds an extra layer of security by requiring users to verify their identity using at least two methods — something they know like a password, and something they have like their phone.",
    "Azure Role-Based Access Control, or RBAC, helps you manage who has access to Azure resources, what they can do with those resources, and what areas they can access. It follows the principle of least privilege.",
    "The principle of least privilege means you only grant users the minimum level of access they need to perform their job. This minimizes the attack surface and reduces the risk of accidental or malicious changes.",
    "Azure Security Center, now called Microsoft Defender for Cloud, is a unified security management system that strengthens the security posture of your cloud workloads and provides advanced threat protection.",
    "The Azure Shared Responsibility Model defines what security tasks are handled by Microsoft and which are handled by you. Microsoft secures the physical infrastructure — you secure your data, identities, and applications.",
    "Azure Policy helps you enforce organizational standards and assess compliance at scale. You can create, assign, and manage policies that enforce rules and effects over your Azure resources automatically.",
    "Azure Blueprints allow you to define a repeatable set of Azure resources and policies that implements organizational standards. This makes it easy to create consistent, compliant environments at scale.",
    "The Microsoft Trust Center is a comprehensive resource that provides information about Microsoft's security, privacy, and compliance practices and how Azure meets regulatory requirements worldwide.",
    "Azure pricing follows a pay-as-you-go model with no upfront costs. You pay only for the resources you use. This makes Azure ideal for businesses of all sizes, from startups to global enterprises.",
    "Azure Reservations allow you to save money by committing to one or three-year plans for many Azure services, including Virtual Machines. Reservations can provide discounts of up to 72 percent.",
    "The Azure Pricing Calculator helps you estimate the cost of Azure products and services before you deploy. You can build a custom estimate based on your specific workload requirements.",
    "Azure Cost Management and Billing provides tools to analyze, monitor, and optimize your Microsoft Cloud costs. It helps you understand your Azure invoice and manage your cloud spending.",
    "An Azure Region is a set of data centers deployed within a latency-defined perimeter and connected through a dedicated regional low-latency network. Azure has over 60 regions in more than 140 countries.",
    "Azure Availability Zones are physically separate locations within an Azure region. Each zone has independent power, cooling, and networking. Deploying across zones protects applications from data center failures. Congratulations — you have completed both modules and are ready for your AZ-900 certification exam!"
  ]
};


const questionBanks = [
  
  [
    {question:"What is Microsoft Azure?",options:["A local server management tool","Microsoft's cloud computing platform with 200+ services","A desktop operating system","An email service only"],correctIndex:1},
    {question:"Which Azure service provides virtual machines in the cloud?",options:["Azure Blob Storage","Azure Functions","Azure Virtual Machines","Azure Cosmos DB"],correctIndex:2},
    {question:"What does IaaS stand for in cloud computing?",options:["Internet as a Service","Infrastructure as a Service","Integration as a Service","Intelligence as a Service"],correctIndex:1},
    {question:"What is Azure Blob Storage primarily used for?",options:["Running virtual machines","Storing unstructured data like images and videos","Managing user identities","Hosting web applications"],correctIndex:1},
    {question:"What is Azure Active Directory (Microsoft Entra ID)?",options:["A file storage service","A virtual network service","A cloud-based identity and access management service","A database service"],correctIndex:2},
    {question:"In the Azure Shared Responsibility Model, who secures the physical data centers?",options:["The customer","Microsoft","Both equally","A third-party auditor"],correctIndex:1},
    {question:"Which Azure pricing model offers up to 72% discount with a 1 or 3-year commitment?",options:["Pay-As-You-Go","Spot Pricing","Azure Reservations","Free Tier"],correctIndex:2},
    {question:"What is an Azure Region?",options:["A single data center","A set of data centers connected within a latency-defined perimeter","A pricing category","A type of virtual machine"],correctIndex:1},
    {question:"What is the principle of least privilege?",options:["Giving all users admin access","Granting only the minimum permissions needed","Denying all access by default","Sharing credentials securely"],correctIndex:1},
    {question:"Which service helps you estimate Azure costs before deploying?",options:["Azure Monitor","Azure Cost Management","Azure Pricing Calculator","Azure Advisor"],correctIndex:2}
  ],
  
  [
    {question:"What does PaaS stand for in cloud computing?",options:["Private as a Service","Platform as a Service","Processing as a Service","Protocol as a Service"],correctIndex:1},
    {question:"Azure Functions is an example of which computing model?",options:["IaaS","PaaS","Serverless (FaaS)","SaaS"],correctIndex:2},
    {question:"Which Azure service is a fully managed relational database built on SQL Server?",options:["Azure Cosmos DB","Azure Table Storage","Azure SQL Database","Azure Redis Cache"],correctIndex:2},
    {question:"What does MFA stand for in Azure security?",options:["Multi-Function Application","Multi-Factor Authentication","Managed Firewall Access","Microsoft Framework Authorization"],correctIndex:1},
    {question:"What is Azure Policy used for?",options:["Managing user passwords","Enforcing organizational standards and compliance across resources","Monitoring network traffic","Creating virtual machines"],correctIndex:1},
    {question:"Which Azure service manages containerized applications using Kubernetes?",options:["Azure App Service","Azure Container Instances","Azure Kubernetes Service (AKS)","Azure Batch"],correctIndex:2},
    {question:"What is Single Sign-On (SSO) in Azure Active Directory?",options:["A two-factor authentication method","Accessing multiple applications with one set of credentials","Encrypting data at rest","A VPN service"],correctIndex:1},
    {question:"Which Azure tool helps you monitor and optimize cloud spending?",options:["Azure Security Center","Azure Cost Management and Billing","Azure Policy","Azure Blueprints"],correctIndex:1},
    {question:"What is an Azure Availability Zone?",options:["A CDN endpoint","A physically separate location within a region with independent power and networking","A pricing tier","A type of storage account"],correctIndex:1},
    {question:"What does SaaS stand for?",options:["Storage as a Service","Security as a Service","Software as a Service","Server as a Service"],correctIndex:2}
  ],
  
  [
    {question:"Which Azure service delivers content globally by caching at edge locations?",options:["Azure Load Balancer","Azure Traffic Manager","Azure Content Delivery Network (CDN)","Azure ExpressRoute"],correctIndex:2},
    {question:"What is Azure Role-Based Access Control (RBAC) used for?",options:["Monitoring network performance","Managing who can access Azure resources and what actions they can take","Encrypting virtual machines","Creating storage accounts"],correctIndex:1},
    {question:"What is Azure Cosmos DB?",options:["A relational database service","A globally distributed multi-model database service","A file storage service","A messaging service"],correctIndex:1},
    {question:"Which Azure service is used to create private networks in the cloud?",options:["Azure DNS","Azure Virtual Network","Azure Load Balancer","Azure Firewall"],correctIndex:1},
    {question:"What is Microsoft Defender for Cloud (formerly Azure Security Center)?",options:["An antivirus program for virtual machines","A unified security management system with advanced threat protection","A compliance reporting tool only","A network monitoring service"],correctIndex:1},
    {question:"How many regions does Azure operate in globally?",options:["10+","30+","60+","100+"],correctIndex:2},
    {question:"What are Azure Blueprints used for?",options:["Designing application architecture","Creating repeatable, compliant Azure environments at scale","Monitoring resource usage","Managing billing alerts"],correctIndex:1},
    {question:"Which cloud service model gives users the most control over infrastructure?",options:["SaaS","PaaS","IaaS","FaaS"],correctIndex:2},
    {question:"What is the Azure Pricing Calculator?",options:["A tool to monitor current Azure costs","A tool to estimate costs of Azure services before deploying","A tool to set spending limits","A tool to compare Azure vs AWS pricing"],correctIndex:1},
    {question:"What is Azure App Service primarily used for?",options:["Storing binary data","Building and deploying web applications and APIs","Running Kubernetes clusters","Managing virtual networks"],correctIndex:1}
  ]
];


let videosWatched      = [false, false];
let currentVideoId     = 0;
let videoPlaying       = false;
let speechSynthesis    = window.speechSynthesis;
let currentUtterance   = null;
let scriptIndex        = 0;
let videoTimerInterval = null;
let videoSeconds       = 0;
const VIDEO_DURATION   = 180; // 3 min per module

let userName  = "";
let userEmail = "";
let userQual  = "";

let questions    = [];
let currentQ     = 0;
let score        = 0;
let answeredQ    = false;
let attemptCount = 0;

let quizTimerInterval = null;
let quizSecondsLeft   = 600;
const QUIZ_DURATION   = 600;

const videoTitles = ["",
  "Module 1 — Cloud Concepts & Azure Core Services",
  "Module 2 — Security, Governance & Pricing"
];
const videoIcons = ["","☁️","🔐"];


function openVideo(id) {
  if (id > 1 && !videosWatched[id-2]) {
    alert("Please complete Module 1 first!");
    return;
  }
  currentVideoId = id;
  videoSeconds   = 0;
  videoPlaying   = false;
  scriptIndex    = 0;
  clearInterval(videoTimerInterval);
  stopSpeech();

  document.getElementById("vpopupTitle").textContent      = videoTitles[id];
  document.getElementById("fakeScreenIcon").textContent   = videoIcons[id];
  document.getElementById("fakeScreenTitle").textContent  = videoTitles[id].replace(/Module \d — /,"");
  document.getElementById("fakeScreenStatus").textContent = "Press ▶ Play to start";
  document.getElementById("playPauseBtn").textContent     = "▶ Play";
  document.getElementById("playPauseBtn").disabled        = false;
  document.getElementById("fakeProgFill").style.width     = "0%";
  document.getElementById("fakeTimer").textContent        = "0:00 / 3:00";
  document.getElementById("waveWrap").style.display       = "none";
  document.getElementById("subtitleBar").style.display    = "none";
  document.getElementById("subtitleText").textContent     = "";
  document.getElementById("vcompleteArea").style.display  = "none";
  document.getElementById("videoPopup").style.display     = "flex";
}

function closeVideo() {
  stopSpeech();
  clearInterval(videoTimerInterval);
  videoPlaying = false;
  document.getElementById("videoPopup").style.display = "none";
}

function stopSpeech() {
  if (speechSynthesis.speaking) speechSynthesis.cancel();
  currentUtterance = null;
}

function togglePlay() {
  if (videoPlaying) pauseVideo(); else playVideo();
}

function playVideo() {
  videoPlaying = true;
  document.getElementById("playPauseBtn").textContent     = "⏸ Pause";
  document.getElementById("fakeScreenStatus").textContent = "▶ Playing...";
  document.getElementById("waveWrap").style.display       = "flex";
  document.getElementById("subtitleBar").style.display    = "flex";

  videoTimerInterval = setInterval(() => {
    videoSeconds++;
    const pct = Math.min((videoSeconds / VIDEO_DURATION) * 100, 100);
    document.getElementById("fakeProgFill").style.width = pct + "%";
    const m = Math.floor(videoSeconds/60), s = videoSeconds % 60;
    document.getElementById("fakeTimer").textContent = m+":"+(s<10?"0":"")+s+" / 3:00";
    if (videoSeconds >= VIDEO_DURATION) { clearInterval(videoTimerInterval); videoCompleted(); }
  }, 1000);

  speakNextLine();
}

function pauseVideo() {
  videoPlaying = false;
  clearInterval(videoTimerInterval);
  stopSpeech();
  document.getElementById("playPauseBtn").textContent     = "▶ Play";
  document.getElementById("fakeScreenStatus").textContent = "Paused — press Play to continue";
  document.getElementById("waveWrap").style.display       = "none";
}

function speakNextLine() {
  if (!videoPlaying) return;
  const script = videoScripts[currentVideoId];
  if (scriptIndex >= script.length) {
    document.getElementById("subtitleText").textContent = "✅ Module narration complete!";
    return;
  }
  const line = script[scriptIndex++];
  document.getElementById("subtitleText").textContent = line;

  const utterance   = new SpeechSynthesisUtterance(line);
  utterance.rate    = 0.92;
  utterance.pitch   = 1.0;
  utterance.volume  = 1.0;

  const voices    = speechSynthesis.getVoices();
  const preferred = voices.find(v =>
    (v.name.includes("Google") || v.name.includes("Microsoft") ||
     v.name.includes("David")  || v.name.includes("Zira")) &&
    v.lang.startsWith("en")
  );
  if (preferred) utterance.voice = preferred;

  utterance.onend   = () => { if (videoPlaying) speakNextLine(); };
  utterance.onerror = () => { if (videoPlaying) speakNextLine(); };
  currentUtterance  = utterance;
  speechSynthesis.speak(utterance);
}

function videoCompleted() {
  stopSpeech();
  videoPlaying = false;
  document.getElementById("playPauseBtn").textContent     = "✓ Done";
  document.getElementById("playPauseBtn").disabled        = true;
  document.getElementById("fakeScreenStatus").textContent = "✅ Module completed!";
  document.getElementById("fakeProgFill").style.width     = "100%";
  document.getElementById("fakeTimer").textContent        = "3:00 / 3:00";
  document.getElementById("waveWrap").style.display       = "none";
  document.getElementById("subtitleText").textContent     = "🎉 Well done! ";
  document.getElementById("vcompleteArea").style.display  = "block";
}

function markVideoDone() {
  const id = currentVideoId;
  videosWatched[id-1] = true;

  const card = document.getElementById("vcard-"+id);
  card.classList.remove("video-locked");
  card.classList.add("video-done");
  document.getElementById("vstatus-"+id).innerHTML = '<span class="dot dot-done"></span> ✅ Completed';
  const btn = document.getElementById("vbtn-"+id);
  btn.textContent = "✓ Watched";
  btn.className   = "vbtn vbtn-done";
  btn.disabled    = true;

  if (id < 2) {
    const nid   = id + 1;
    const ncard = document.getElementById("vcard-"+nid);
    const nbtn  = document.getElementById("vbtn-"+nid);
    const nstat = document.getElementById("vstatus-"+nid);
    ncard.classList.remove("video-locked");
    ncard.classList.add("video-unlocked");
    nbtn.textContent = "▶ Watch Now";
    nbtn.className   = "vbtn";
    nbtn.disabled    = false;
    nbtn.onclick     = () => openVideo(nid);
    nstat.innerHTML  = '<span class="dot dot-active"></span> Ready to watch';
    const nthumb = ncard.querySelector(".vthumb");
    nthumb.onclick = () => openVideo(nid);
    const lockC = nthumb.querySelector(".play-circle");
    lockC.className   = "play-circle";
    lockC.textContent = "▶";
  }

  updateProgress();
  closeVideo();
  if (videosWatched.every(Boolean)) enableStartTest();
}

function updateProgress() {
  const done = videosWatched.filter(Boolean).length;
  document.getElementById("progressFill").style.width      = (done/2*100)+"%";
  document.getElementById("videoProgressText").textContent = done+" / 2 modules watched";
}

function enableStartTest() {
  document.getElementById("allDoneMsg").style.display = "block";
  const btn = document.getElementById("startTestBtn");
  btn.disabled    = false;
  btn.className   = "start-test-btn unlocked";
  btn.textContent = "🎯 Start  Test";
  document.getElementById("startHint").textContent = "All modules done! Click to begin your exam.";
}


function goToForm() {
  document.getElementById("screen-course").style.display = "none";
  document.getElementById("screen-form").style.display   = "block";
  window.scrollTo(0,0);
}

function submitForm() {
  const name   = document.getElementById("inp-name").value.trim();
  const qual   = document.getElementById("inp-qual").value;
  const email  = document.getElementById("inp-email").value.trim();
  const errBox = document.getElementById("formError");

  if (!name || !qual || !email) {
    errBox.style.display = "block";
    errBox.textContent   = "⚠️ Please fill in all fields before submitting.";
    return;
  }
  if (!email.includes("@") || !email.includes(".")) {
    errBox.style.display = "block";
    errBox.textContent   = "⚠️ Please enter a valid email address.";
    return;
  }

  userName  = name;
  userEmail = email;
  userQual  = qual;
  errBox.style.display = "none";

  document.getElementById("screen-form").style.display = "none";
  document.getElementById("screen-quiz").style.display = "block";
  window.scrollTo(0,0);

  buildQDots();
  loadQuestions();
}


function buildQDots() {
  const c = document.getElementById("qDotsRow");
  c.innerHTML = "";
  for (let i=1; i<=10; i++) {
    const d = document.createElement("div");
    d.className   = "q-dot" + (i===1?" dot-current":"");
    d.id          = "qdot-"+i;
    d.textContent = i;
    c.appendChild(d);
  }
}


function loadQuestions() {
  document.getElementById("aiLoader").style.display    = "block";
  document.getElementById("quizContent").style.display = "none";
  document.getElementById("timerDisplay").textContent  = "10:00";
  document.getElementById("timerBarFill").style.width  = "100%";
  document.getElementById("timerBarFill").classList.remove("timer-warning","timer-danger");

  const bankIndex = attemptCount % 3;
  questions = shuffleArray([...questionBanks[bankIndex]]);
  questions = questions.map(q => shuffleOptions(q));

  setTimeout(() => {
    document.getElementById("aiLoader").style.display    = "none";
    document.getElementById("quizContent").style.display = "block";
    currentQ  = 0;
    score     = 0;
    answeredQ = false;
    displayQuestion(0);
    startQuizTimer();
  }, 1200);
}

function shuffleArray(arr) {
  for (let i = arr.length-1; i > 0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function shuffleOptions(q) {
  const paired = q.options.map((opt, i) => ({ opt, correct: i === q.correctIndex }));
  for (let i = paired.length-1; i > 0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [paired[i], paired[j]] = [paired[j], paired[i]];
  }
  return {
    question: q.question,
    options: paired.map(p => p.opt),
    correctIndex: paired.findIndex(p => p.correct)
  };
}


function startQuizTimer() {
  clearInterval(quizTimerInterval);
  quizSecondsLeft = QUIZ_DURATION;
  updateTimerDisplay();

  quizTimerInterval = setInterval(() => {
    quizSecondsLeft--;
    updateTimerDisplay();
    if (quizSecondsLeft <= 0) {
      clearInterval(quizTimerInterval);
      timeUp();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const m   = Math.floor(quizSecondsLeft / 60);
  const s   = quizSecondsLeft % 60;
  const pct = (quizSecondsLeft / QUIZ_DURATION) * 100;

  document.getElementById("timerDisplay").textContent = m+":"+(s<10?"0":"")+s;
  document.getElementById("timerBarFill").style.width = pct+"%";

  const fill = document.getElementById("timerBarFill");
  fill.classList.remove("timer-warning","timer-danger");
  if (quizSecondsLeft <= 60)       fill.classList.add("timer-danger");
  else if (quizSecondsLeft <= 180) fill.classList.add("timer-warning");
}

function timeUp() {
  document.getElementById("timeUpScoreTxt").textContent = "Score: "+score+" / 10";
  document.getElementById("timeUpPopup").style.display  = "flex";
}

function closeTimeUpPopup() {
  document.getElementById("timeUpPopup").style.display = "none";
  showResult();
}

function stopQuizTimer() {
  clearInterval(quizTimerInterval);
}


function displayQuestion(idx) {
  answeredQ = false;
  const q   = questions[idx];

  document.getElementById("qCounterTxt").textContent  = "Question "+(idx+1)+" of 10";
  document.getElementById("quizTopRight").textContent = "Exam — Question "+(idx+1)+" of 10";
  document.getElementById("qNumLabel").textContent    = idx+1;
  document.getElementById("qScoreTxt").textContent    = "Score: "+score+" / "+idx;
  document.getElementById("qText").textContent        = q.question;
  document.getElementById("aiEvalRow").style.display  = "none";
  document.getElementById("nextBtn").style.display    = "none";

  const opts = document.getElementById("qOptions");
  opts.innerHTML = "";
  ["A","B","C","D"].forEach((letter, i) => {
    const btn = document.createElement("button");
    btn.className = "opt-btn";
    btn.innerHTML = `<div class="opt-letter">${letter}</div><span>${q.options[i]}</span>`;
    btn.onclick   = () => selectAnswer(i, btn, idx);
    opts.appendChild(btn);
  });

  document.querySelectorAll(".q-dot").forEach((d,i) => {
    d.classList.remove("dot-current");
    if (i===idx) d.classList.add("dot-current");
  });
}


function selectAnswer(selectedIdx, clickedBtn, qIdx) {
  if (answeredQ) return;
  answeredQ = true;

  document.querySelectorAll(".opt-btn").forEach(b => b.style.pointerEvents="none");
  document.getElementById("aiEvalRow").style.display = "flex";

  setTimeout(() => {
    document.getElementById("aiEvalRow").style.display = "none";
    const correct = questions[qIdx].correctIndex;
    const allBtns = document.querySelectorAll(".opt-btn");

    allBtns[correct].classList.add("opt-correct");
    if (selectedIdx !== correct) {
      clickedBtn.classList.add("opt-wrong");
      document.getElementById("qdot-"+(qIdx+1)).className = "q-dot dot-wrong";
    } else {
      score++;
      document.getElementById("qdot-"+(qIdx+1)).className = "q-dot dot-correct";
    }

    document.getElementById("qScoreTxt").textContent = "Score: "+score+" / "+(qIdx+1);

    const nb = document.getElementById("nextBtn");
    nb.style.display = "inline-block";
    nb.textContent   = qIdx===9 ? "📊 See My Results →" : "Next Question →";
  }, 1500);
}

function nextQuestion() {
  currentQ++;
  if (currentQ < 10) displayQuestion(currentQ);
  else { stopQuizTimer(); showResult(); }
}


function showResult() {
  stopQuizTimer();
  document.getElementById("screen-quiz").style.display   = "none";
  document.getElementById("screen-result").style.display = "block";
  window.scrollTo(0,0);

  const passed = score >= 8;
  const rscore = document.getElementById("resultScore");
  rscore.textContent = score+" / 10";
  rscore.className   = "result-score "+(passed?"pass":"fail");

  if (passed) {
    document.getElementById("resultEmoji").textContent = "🏆";
    document.getElementById("resultTitle").textContent = "Congratulations, "+userName+"!";
    document.getElementById("resultMsg").textContent   =
      "You scored "+score+" out of 10 and have passed the Microsoft Azure Fundamentals (AZ-900) Certification Exam! Your certificate is ready.";
    document.getElementById("certDlBtn").style.display = "inline-block";
    document.getElementById("retryBtn").style.display  = "none";

    document.getElementById("successPopupMsg").textContent = "Well done, "+userName+"! You are now Microsoft Azure Fundamentals Certified!";
    document.getElementById("successScoreTxt").textContent = "Score: "+score+" / 10";
    setTimeout(() => { document.getElementById("successPopup").style.display = "flex"; }, 700);

  } else {
    document.getElementById("resultEmoji").textContent = "😔";
    document.getElementById("resultTitle").textContent = "Not Qualified — "+userName;
    document.getElementById("resultMsg").textContent   =
      "You scored "+score+" out of 10. You need 8 or more correct answers to pass. Review the modules and try again!";
    document.getElementById("certDlBtn").style.display = "none";
    document.getElementById("retryBtn").style.display  = "inline-block";

    document.getElementById("failPopupMsg").textContent = "Don't give up, "+userName+"! Study the course modules and try again.";
    document.getElementById("failScoreTxt").textContent = "Score: "+score+" / 10";
    setTimeout(() => { document.getElementById("failPopup").style.display = "flex"; }, 700);
  }
}

function closeSuccessAndDownload() {
  document.getElementById("successPopup").style.display = "none";
  downloadCertificate();
}

function closeFailPopup() {
  document.getElementById("failPopup").style.display = "none";
}

function retryExam() {
  attemptCount++;
  currentQ    = 0;
  score       = 0;
  answeredQ   = false;
  questions   = [];

  document.getElementById("screen-result").style.display = "none";
  document.getElementById("screen-quiz").style.display   = "block";
  window.scrollTo(0,0);

  buildQDots();
  loadQuestions();
}


function downloadCertificate() {
  const today   = new Date();
  const dateStr = today.toLocaleDateString("en-IN", {day:"2-digit",month:"long",year:"numeric"});

  const certHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Great+Vibes&display=swap');
*{margin:0;padding:0;box-sizing:border-box;}
body{background:#021b5a;display:flex;justify-content:center;align-items:center;min-height:100vh;font-family:'Poppins',sans-serif;padding:20px;}
.certificate{width:1100px;height:700px;background:#fff;position:relative;overflow:hidden;border:14px solid #0078d4;box-shadow:0 0 20px rgba(0,0,0,0.3);}
.top-design{position:absolute;top:0;left:0;width:100%;height:60px;background:linear-gradient(90deg,#0078d4 40%,#50e6ff 70%,#0078d4 100%);}
.top-design::after{content:'';position:absolute;right:180px;top:0;width:120px;height:60px;background:#00b4d8;transform:skewX(-40deg);}
.top-design::before{content:'';position:absolute;right:130px;top:0;width:40px;height:60px;background:#0078d4;transform:skewX(-40deg);}
.bottom-design{position:absolute;bottom:0;left:0;width:100%;height:60px;background:linear-gradient(90deg,#0078d4 40%,#50e6ff 70%,#0078d4 100%);}
.bottom-design::after{content:'';position:absolute;left:180px;bottom:0;width:120px;height:60px;background:#00b4d8;transform:skewX(-40deg);}
.bottom-design::before{content:'';position:absolute;left:130px;bottom:0;width:40px;height:60px;background:#0078d4;transform:skewX(-40deg);}
.content{position:relative;z-index:2;text-align:center;padding:70px 80px 40px;}
.brand{font-size:46px;font-weight:700;margin-bottom:10px;}
.brand span:first-child{color:#0078d4;}.brand span:last-child{color:#005a9e;}
.line{width:70%;height:2px;background:#ddd;margin:10px auto;}
.title{font-size:36px;color:#0b1d68;font-family:'Times New Roman',serif;margin-bottom:8px;font-weight:bold;}
.name{font-family:'Great Vibes',cursive;font-size:58px;color:#0078d4;margin-top:10px;}
.underline{width:60%;border-bottom:3px dotted #555;margin:0 auto 14px;}
.text{font-size:20px;color:#555;margin-bottom:10px;}
.course{font-size:26px;color:#081d6b;font-weight:700;margin-bottom:14px;}
.description{width:80%;margin:0 auto;font-size:18px;color:#444;line-height:1.6;}
.date-issued{font-size:14px;color:#888;margin-top:8px;}
.verified{position:absolute;bottom:110px;right:255px;width:190px;height:190px;border:6px solid rgba(0,120,212,0.3);border-radius:50%;display:flex;justify-content:center;align-items:center;font-size:46px;font-weight:bold;color:rgba(0,120,212,0.3);transform:rotate(-20deg);}
.signature{position:absolute;right:80px;bottom:90px;text-align:center;}
.signature .sign{font-size:68px;font-family:'Great Vibes',cursive;color:#000;}
.signature .name-sign{font-size:26px;font-weight:600;margin-top:-10px;}
.signature .role{font-size:22px;color:#555;}
@media print{body{background:white;}@page{size:A4 landscape;margin:0;}}
</style>
</head>
<body>
<div class="certificate">
  <div class="top-design"></div>
  <div class="bottom-design"></div>
  <div class="content">
    <h1 class="brand"><span>Amivel</span> <span>Tech</span></h1>
    <div class="line"></div>
    <h2 class="title">CERTIFICATE OF COMPLETION</h2>
    <div class="line"></div>
    <h1 class="name">${userName}</h1>
    <div class="underline"></div>
    <p class="text">has successfully completed the online course:</p>
    <h3 class="course">MICROSOFT AZURE FUNDAMENTALS (AZ-900)</h3>
    <p class="description">This professional has demonstrated initiative and a commitment to deepening their cloud computing skills. Well done!</p>
    <p class="date-issued">Date of Completion: ${dateStr}</p>
  </div>
  <div class="verified">VERIFIED</div>
  <div class="signature">
    <div class="sign">J</div>
    <div class="name-sign">Jyothi</div>
    <div class="role">CEO, Amivel Tech</div>
  </div>
</div>
</body>
</html>`;

  const win = window.open("","_blank","width=1200,height=800");
  win.document.write(certHTML);
  win.document.close();
  win.onload = function() { setTimeout(() => { win.focus(); win.print(); }, 1500); };
}

window.onload = function() {
  updateProgress();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices();
  }
};
