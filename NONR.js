/************* 
 * Nonr *
 *************/

import { core, data, sound, util, visual, hardware } from 'https://unpkg.com/psychojs@2024.2.5/dist/psychojs-2024.2.5.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'NONR';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'deg',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(startuemRoutineBegin());
flowScheduler.add(startuemRoutineEachFrame());
flowScheduler.add(startuemRoutineEnd());
const expertise_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(expertise_loopLoopBegin(expertise_loopLoopScheduler));
flowScheduler.add(expertise_loopLoopScheduler);
flowScheduler.add(expertise_loopLoopEnd);


flowScheduler.add(instr_aospanRoutineBegin());
flowScheduler.add(instr_aospanRoutineEachFrame());
flowScheduler.add(instr_aospanRoutineEnd());
const ensayosLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(ensayosLoopBegin(ensayosLoopScheduler));
flowScheduler.add(ensayosLoopScheduler);
flowScheduler.add(ensayosLoopEnd);







const span2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(span2LoopBegin(span2LoopScheduler));
flowScheduler.add(span2LoopScheduler);
flowScheduler.add(span2LoopEnd);







const span3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(span3LoopBegin(span3LoopScheduler));
flowScheduler.add(span3LoopScheduler);
flowScheduler.add(span3LoopEnd);







const span4LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(span4LoopBegin(span4LoopScheduler));
flowScheduler.add(span4LoopScheduler);
flowScheduler.add(span4LoopEnd);







const span5LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(span5LoopBegin(span5LoopScheduler));
flowScheduler.add(span5LoopScheduler);
flowScheduler.add(span5LoopEnd);







const span6LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(span6LoopBegin(span6LoopScheduler));
flowScheduler.add(span6LoopScheduler);
flowScheduler.add(span6LoopEnd);







flowScheduler.add(video_instructionRoutineBegin());
flowScheduler.add(video_instructionRoutineEachFrame());
flowScheduler.add(video_instructionRoutineEnd());
flowScheduler.add(videooRoutineBegin());
flowScheduler.add(videooRoutineEachFrame());
flowScheduler.add(videooRoutineEnd());
flowScheduler.add(load_instrRoutineBegin());
flowScheduler.add(load_instrRoutineEachFrame());
flowScheduler.add(load_instrRoutineEnd());
flowScheduler.add(load_umRoutineBegin());
flowScheduler.add(load_umRoutineEachFrame());
flowScheduler.add(load_umRoutineEnd());
flowScheduler.add(load_fsRoutineBegin());
flowScheduler.add(load_fsRoutineEachFrame());
flowScheduler.add(load_fsRoutineEnd());
flowScheduler.add(testinstrRoutineBegin());
flowScheduler.add(testinstrRoutineEachFrame());
flowScheduler.add(testinstrRoutineEnd());
const retention_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(retention_loopLoopBegin(retention_loopLoopScheduler));
flowScheduler.add(retention_loopLoopScheduler);
flowScheduler.add(retention_loopLoopEnd);


flowScheduler.add(ebatspsRoutineBegin());
flowScheduler.add(ebatspsRoutineEachFrame());
flowScheduler.add(ebatspsRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });
  
psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);

async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.5';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}

async function experimentInit() {
  // Initialize components for Routine "startuem"
  startuemClock = new util.Clock();
  text_start = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_start',
    text: 'Спасибо, что согласились пройти этот эксперимент!\nСейчас вам нужно будет ответить на несколько тестовых вопросов, касающихся ваших познаний, отвечайте кратко и своими словами.\nПостарайтесь потратить на тест не больше 10 минут.\nЧтобы продолжить, нажмите ПРOБЕЛ. \n!!! После ответа на каждый из вопросов нажимайте ENTER !!!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_start = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "expertise_question"
  expertise_questionClock = new util.Clock();
  question_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.5], draggable: false, height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  expertise_answer = new visual.TextBox({
    win: psychoJS.window,
    name: 'expertise_answer',
    text: '',
    placeholder: undefined,
    font: 'Arial',
    pos: [0, (- 0.5)], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.8, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: [1.0, (- 1.0), (- 1.0)],
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  key_respexpert = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instr_aospan"
  instr_aospanClock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'В этом задании вам нужно будет делать две вещи одновременно.\n\n1. На экране появятся математические примеры с предложенным ответом. Например: (2+2)×2=8.\nВам нужно решить, правильный ли это ответ. Нажмите СТРЕЛКУ ВПРАВО, если ответ верный, и СТРЕЛКУ ВЛЕВО, если неверный.\n2. Сразу после этого на короткое время в центре экрана появятся синие буквы. Вам нужно их запомнить.\n3. Когда на экране появится красный знак вопроса «?», введите запомненные буквы на клавиатуре в том же порядке, в котором они появлялись. Когда закончите ввод, нажмите ПРОБЕЛ.\nПосле того как вы нажмете ПРОБЕЛ, начнется новая серия, и предыдущие буквы можно забыть. Сначала мы сделаем несколько тренировочных примеров. \n\n!!! OБЯЗАТЕЛЬНO ПЕРЕКЛЮЧИТЕСЬ НА АНГЛИЙСКУЮ РАСКЛАДКУ !!!\n\nНажмите ПРОБЕЛ, чтобы начать.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "warninge"
  warningeClock = new util.Clock();
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: 'Начинается тренировочная серия',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.15,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "mem"
  memClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.3,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('blue'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Recall"
  RecallClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.25,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('red'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "warning1"
  warning1Clock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'Внимание!\nНачинается новая серия',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.15,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "video_instruction"
  video_instructionClock = new util.Clock();
  text_instrvideo = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instrvideo',
    text: 'Сейчас вам нужно будет внимательно просмотреть видео длительностью примерно в 5 минут. \nЧтобы продолжить, нажмите ПРOБЕЛ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  vdeonstranw = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "videoo"
  videooClock = new util.Clock();
  nonr_movieClock = new util.Clock();
  nonr_movie = new visual.MovieStim({
    win: psychoJS.window,
    name: 'nonr_movie',
    units: psychoJS.window.units,
    movie: 'nonr_main.mp4',
    pos: [0, 0],
    anchor: 'center',
    size: [1.5, 1.5],
    ori: 0.0,
    opacity: undefined,
    loop: false,
    noAudio: false,
    depth: 0
    });
  // Initialize components for Routine "load_instr"
  load_instrClock = new util.Clock();
  load_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'load_txt',
    text: 'Перед вами сейчас будут высвечиваться вопросы о ваших субъективных ощущениях при просмотре видео.\n\nПожалуйста, прочитайте внимательно каждый вопрос и поставьте отметку на каждой из шкал в точке, которая наиболее точно соответствует вашим субъективным ощущениям.\n\nНажмите ПРOБЕЛ, чтобы перейти к заполнению.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resploaad = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "load_um"
  load_umClock = new util.Clock();
  text_umm = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_umm',
    text: 'Насколько сильно Вам пришлось напрячь умственные способности, чтобы понять материал?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.5], draggable: false, height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  paas = new visual.Slider({
    win: psychoJS.window, name: 'paas',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, (- 0.4)], ori: 0.0, units: psychoJS.window.units,
    labels: undefined, fontSize: 0.05, ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  // Initialize components for Routine "load_fs"
  load_fsClock = new util.Clock();
  text_umm_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_umm_2',
    text: 'Насколько материал показался Вам запутанным?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.5], draggable: false, height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  umstvennaya_2 = new visual.Slider({
    win: psychoJS.window, name: 'umstvennaya_2',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, (- 0.4)], ori: 0.0, units: psychoJS.window.units,
    labels: undefined, fontSize: 0.05, ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  // Initialize components for Routine "testinstr"
  testinstrClock = new util.Clock();
  text_que = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_que',
    text: 'Далее вам необходимо ответить на тестовые вопросы по просмотренному материалу. Oтвечайте кратко, своими словами.\nЧтобы продолжить, нажмите ПРOБЕЛ. \n\n!!! После ответа на каждый вопрос нажимайте на ENTER !!!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_respque = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "test_rating"
  test_ratingClock = new util.Clock();
  ret_question_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'ret_question_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.5], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  ret_answer = new visual.TextBox({
    win: psychoJS.window,
    name: 'ret_answer',
    text: '',
    placeholder: undefined,
    font: 'Arial',
    pos: [0, (- 0.5)], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.8, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: [1.0, (- 1.0), (- 1.0)],
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  key_resptestt = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ebatsps"
  ebatspsClock = new util.Clock();
  text_sps = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_sps',
    text: 'Oгромное спасибо за потраченное время и силы! \n\nДождитесь окончания загрузки данных!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.08,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

function startuemRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'startuem' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    startuemClock.reset();
    routineTimer.reset();
    startuemMaxDurationReached = false;
    // update component parameters for each repeat
    key_start.keys = undefined;
    key_start.rt = undefined;
    _key_start_allKeys = [];
    psychoJS.experiment.addData('startuem.started', globalClock.getTime());
    startuemMaxDuration = null
    // keep track of which components have finished
    startuemComponents = [];
    startuemComponents.push(text_start);
    startuemComponents.push(key_start);
    
    for (const thisComponent of startuemComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function startuemRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'startuem' ---
    // get current time
    t = startuemClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_start* updates
    if (t >= 0.0 && text_start.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_start.tStart = t;  // (not accounting for frame time here)
      text_start.frameNStart = frameN;  // exact frame index
      
      text_start.setAutoDraw(true);
    }
    
    
    // *key_start* updates
    if (t >= 0.5 && key_start.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_start.tStart = t;  // (not accounting for frame time here)
      key_start.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_start.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_start.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_start.clearEvents(); });
    }
    
    if (key_start.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_start.getKeys({keyList: ['space'], waitRelease: false});
      _key_start_allKeys = _key_start_allKeys.concat(theseKeys);
      if (_key_start_allKeys.length > 0) {
        key_start.keys = _key_start_allKeys[_key_start_allKeys.length - 1].name;  // just the last key pressed
        key_start.rt = _key_start_allKeys[_key_start_allKeys.length - 1].rt;
        key_start.duration = _key_start_allKeys[_key_start_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of startuemComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function startuemRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'startuem' ---
    for (const thisComponent of startuemComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('startuem.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_start.corr, level);
    }
    psychoJS.experiment.addData('key_start.keys', key_start.keys);
    if (typeof key_start.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_start.rt', key_start.rt);
        psychoJS.experiment.addData('key_start.duration', key_start.duration);
        routineTimer.reset();
        }
    
    key_start.stop();
    // the Routine "startuem" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function expertise_loopLoopBegin(expertise_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    expertise_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'expertise_questions.xlsx',
      seed: undefined, name: 'expertise_loop'
    });
    psychoJS.experiment.addLoop(expertise_loop); // add the loop to the experiment
    currentLoop = expertise_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisExpertise_loop of expertise_loop) {
      snapshot = expertise_loop.getSnapshot();
      expertise_loopLoopScheduler.add(importConditions(snapshot));
      expertise_loopLoopScheduler.add(expertise_questionRoutineBegin(snapshot));
      expertise_loopLoopScheduler.add(expertise_questionRoutineEachFrame());
      expertise_loopLoopScheduler.add(expertise_questionRoutineEnd(snapshot));
      expertise_loopLoopScheduler.add(expertise_loopLoopEndIteration(expertise_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function expertise_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(expertise_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function expertise_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function ensayosLoopBegin(ensayosLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    ensayos = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'Bloques.xlsx', '0:2'),
      seed: undefined, name: 'ensayos'
    });
    psychoJS.experiment.addLoop(ensayos); // add the loop to the experiment
    currentLoop = ensayos;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisEnsayo of ensayos) {
      snapshot = ensayos.getSnapshot();
      ensayosLoopScheduler.add(importConditions(snapshot));
      ensayosLoopScheduler.add(warningeRoutineBegin(snapshot));
      ensayosLoopScheduler.add(warningeRoutineEachFrame());
      ensayosLoopScheduler.add(warningeRoutineEnd(snapshot));
      const ensayosejemLoopScheduler = new Scheduler(psychoJS);
      ensayosLoopScheduler.add(ensayosejemLoopBegin(ensayosejemLoopScheduler, snapshot));
      ensayosLoopScheduler.add(ensayosejemLoopScheduler);
      ensayosLoopScheduler.add(ensayosejemLoopEnd);
      ensayosLoopScheduler.add(RecallRoutineBegin(snapshot));
      ensayosLoopScheduler.add(RecallRoutineEachFrame());
      ensayosLoopScheduler.add(RecallRoutineEnd(snapshot));
      ensayosLoopScheduler.add(ensayosLoopEndIteration(ensayosLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

function ensayosejemLoopBegin(ensayosejemLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    ensayosejem = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, Eligebloque, '0:2'),
      seed: undefined, name: 'ensayosejem'
    });
    psychoJS.experiment.addLoop(ensayosejem); // add the loop to the experiment
    currentLoop = ensayosejem;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisEnsayosejem of ensayosejem) {
      snapshot = ensayosejem.getSnapshot();
      ensayosejemLoopScheduler.add(importConditions(snapshot));
      ensayosejemLoopScheduler.add(trialRoutineBegin(snapshot));
      ensayosejemLoopScheduler.add(trialRoutineEachFrame());
      ensayosejemLoopScheduler.add(trialRoutineEnd(snapshot));
      ensayosejemLoopScheduler.add(memRoutineBegin(snapshot));
      ensayosejemLoopScheduler.add(memRoutineEachFrame());
      ensayosejemLoopScheduler.add(memRoutineEnd(snapshot));
      ensayosejemLoopScheduler.add(ensayosejemLoopEndIteration(ensayosejemLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function ensayosejemLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(ensayosejem);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function ensayosejemLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

async function ensayosLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(ensayos);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function ensayosLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function span2LoopBegin(span2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    span2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'Bloques.xlsx', '0:3'),
      seed: undefined, name: 'span2'
    });
    psychoJS.experiment.addLoop(span2); // add the loop to the experiment
    currentLoop = span2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisSpan2 of span2) {
      snapshot = span2.getSnapshot();
      span2LoopScheduler.add(importConditions(snapshot));
      span2LoopScheduler.add(warning1RoutineBegin(snapshot));
      span2LoopScheduler.add(warning1RoutineEachFrame());
      span2LoopScheduler.add(warning1RoutineEnd(snapshot));
      const ensayos2LoopScheduler = new Scheduler(psychoJS);
      span2LoopScheduler.add(ensayos2LoopBegin(ensayos2LoopScheduler, snapshot));
      span2LoopScheduler.add(ensayos2LoopScheduler);
      span2LoopScheduler.add(ensayos2LoopEnd);
      span2LoopScheduler.add(RecallRoutineBegin(snapshot));
      span2LoopScheduler.add(RecallRoutineEachFrame());
      span2LoopScheduler.add(RecallRoutineEnd(snapshot));
      span2LoopScheduler.add(span2LoopEndIteration(span2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

function ensayos2LoopBegin(ensayos2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    ensayos2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, Eligebloque, '2:4'),
      seed: undefined, name: 'ensayos2'
    });
    psychoJS.experiment.addLoop(ensayos2); // add the loop to the experiment
    currentLoop = ensayos2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisEnsayos2 of ensayos2) {
      snapshot = ensayos2.getSnapshot();
      ensayos2LoopScheduler.add(importConditions(snapshot));
      ensayos2LoopScheduler.add(trialRoutineBegin(snapshot));
      ensayos2LoopScheduler.add(trialRoutineEachFrame());
      ensayos2LoopScheduler.add(trialRoutineEnd(snapshot));
      ensayos2LoopScheduler.add(memRoutineBegin(snapshot));
      ensayos2LoopScheduler.add(memRoutineEachFrame());
      ensayos2LoopScheduler.add(memRoutineEnd(snapshot));
      ensayos2LoopScheduler.add(ensayos2LoopEndIteration(ensayos2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function ensayos2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(ensayos2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function ensayos2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

async function span2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(span2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function span2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function span3LoopBegin(span3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    span3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'Bloques.xlsx', '0:3'),
      seed: undefined, name: 'span3'
    });
    psychoJS.experiment.addLoop(span3); // add the loop to the experiment
    currentLoop = span3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisSpan3 of span3) {
      snapshot = span3.getSnapshot();
      span3LoopScheduler.add(importConditions(snapshot));
      span3LoopScheduler.add(warning1RoutineBegin(snapshot));
      span3LoopScheduler.add(warning1RoutineEachFrame());
      span3LoopScheduler.add(warning1RoutineEnd(snapshot));
      const ensayos3LoopScheduler = new Scheduler(psychoJS);
      span3LoopScheduler.add(ensayos3LoopBegin(ensayos3LoopScheduler, snapshot));
      span3LoopScheduler.add(ensayos3LoopScheduler);
      span3LoopScheduler.add(ensayos3LoopEnd);
      span3LoopScheduler.add(RecallRoutineBegin(snapshot));
      span3LoopScheduler.add(RecallRoutineEachFrame());
      span3LoopScheduler.add(RecallRoutineEnd(snapshot));
      span3LoopScheduler.add(span3LoopEndIteration(span3LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

function ensayos3LoopBegin(ensayos3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    ensayos3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, Eligebloque, '4:7'),
      seed: undefined, name: 'ensayos3'
    });
    psychoJS.experiment.addLoop(ensayos3); // add the loop to the experiment
    currentLoop = ensayos3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisEnsayos3 of ensayos3) {
      snapshot = ensayos3.getSnapshot();
      ensayos3LoopScheduler.add(importConditions(snapshot));
      ensayos3LoopScheduler.add(trialRoutineBegin(snapshot));
      ensayos3LoopScheduler.add(trialRoutineEachFrame());
      ensayos3LoopScheduler.add(trialRoutineEnd(snapshot));
      ensayos3LoopScheduler.add(memRoutineBegin(snapshot));
      ensayos3LoopScheduler.add(memRoutineEachFrame());
      ensayos3LoopScheduler.add(memRoutineEnd(snapshot));
      ensayos3LoopScheduler.add(ensayos3LoopEndIteration(ensayos3LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function ensayos3LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(ensayos3);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function ensayos3LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

async function span3LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(span3);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function span3LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function span4LoopBegin(span4LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    span4 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'Bloques.xlsx', '0:3'),
      seed: undefined, name: 'span4'
    });
    psychoJS.experiment.addLoop(span4); // add the loop to the experiment
    currentLoop = span4;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisSpan4 of span4) {
      snapshot = span4.getSnapshot();
      span4LoopScheduler.add(importConditions(snapshot));
      span4LoopScheduler.add(warning1RoutineBegin(snapshot));
      span4LoopScheduler.add(warning1RoutineEachFrame());
      span4LoopScheduler.add(warning1RoutineEnd(snapshot));
      const ensayos4LoopScheduler = new Scheduler(psychoJS);
      span4LoopScheduler.add(ensayos4LoopBegin(ensayos4LoopScheduler, snapshot));
      span4LoopScheduler.add(ensayos4LoopScheduler);
      span4LoopScheduler.add(ensayos4LoopEnd);
      span4LoopScheduler.add(RecallRoutineBegin(snapshot));
      span4LoopScheduler.add(RecallRoutineEachFrame());
      span4LoopScheduler.add(RecallRoutineEnd(snapshot));
      span4LoopScheduler.add(span4LoopEndIteration(span4LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

function ensayos4LoopBegin(ensayos4LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    ensayos4 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, Eligebloque, '7:11'),
      seed: undefined, name: 'ensayos4'
    });
    psychoJS.experiment.addLoop(ensayos4); // add the loop to the experiment
    currentLoop = ensayos4;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisEnsayos4 of ensayos4) {
      snapshot = ensayos4.getSnapshot();
      ensayos4LoopScheduler.add(importConditions(snapshot));
      ensayos4LoopScheduler.add(trialRoutineBegin(snapshot));
      ensayos4LoopScheduler.add(trialRoutineEachFrame());
      ensayos4LoopScheduler.add(trialRoutineEnd(snapshot));
      ensayos4LoopScheduler.add(memRoutineBegin(snapshot));
      ensayos4LoopScheduler.add(memRoutineEachFrame());
      ensayos4LoopScheduler.add(memRoutineEnd(snapshot));
      ensayos4LoopScheduler.add(ensayos4LoopEndIteration(ensayos4LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function ensayos4LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(ensayos4);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function ensayos4LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

async function span4LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(span4);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function span4LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function span5LoopBegin(span5LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    span5 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'Bloques.xlsx', '0:3'),
      seed: undefined, name: 'span5'
    });
    psychoJS.experiment.addLoop(span5); // add the loop to the experiment
    currentLoop = span5;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisSpan5 of span5) {
      snapshot = span5.getSnapshot();
      span5LoopScheduler.add(importConditions(snapshot));
      span5LoopScheduler.add(warning1RoutineBegin(snapshot));
      span5LoopScheduler.add(warning1RoutineEachFrame());
      span5LoopScheduler.add(warning1RoutineEnd(snapshot));
      const ensayos5LoopScheduler = new Scheduler(psychoJS);
      span5LoopScheduler.add(ensayos5LoopBegin(ensayos5LoopScheduler, snapshot));
      span5LoopScheduler.add(ensayos5LoopScheduler);
      span5LoopScheduler.add(ensayos5LoopEnd);
      span5LoopScheduler.add(RecallRoutineBegin(snapshot));
      span5LoopScheduler.add(RecallRoutineEachFrame());
      span5LoopScheduler.add(RecallRoutineEnd(snapshot));
      span5LoopScheduler.add(span5LoopEndIteration(span5LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

function ensayos5LoopBegin(ensayos5LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    ensayos5 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, Eligebloque, '11:16'),
      seed: undefined, name: 'ensayos5'
    });
    psychoJS.experiment.addLoop(ensayos5); // add the loop to the experiment
    currentLoop = ensayos5;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisEnsayos5 of ensayos5) {
      snapshot = ensayos5.getSnapshot();
      ensayos5LoopScheduler.add(importConditions(snapshot));
      ensayos5LoopScheduler.add(trialRoutineBegin(snapshot));
      ensayos5LoopScheduler.add(trialRoutineEachFrame());
      ensayos5LoopScheduler.add(trialRoutineEnd(snapshot));
      ensayos5LoopScheduler.add(memRoutineBegin(snapshot));
      ensayos5LoopScheduler.add(memRoutineEachFrame());
      ensayos5LoopScheduler.add(memRoutineEnd(snapshot));
      ensayos5LoopScheduler.add(ensayos5LoopEndIteration(ensayos5LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function ensayos5LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(ensayos5);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function ensayos5LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

async function span5LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(span5);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function span5LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function span6LoopBegin(span6LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    span6 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'Bloques.xlsx', '0:3'),
      seed: undefined, name: 'span6'
    });
    psychoJS.experiment.addLoop(span6); // add the loop to the experiment
    currentLoop = span6;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisSpan6 of span6) {
      snapshot = span6.getSnapshot();
      span6LoopScheduler.add(importConditions(snapshot));
      span6LoopScheduler.add(warning1RoutineBegin(snapshot));
      span6LoopScheduler.add(warning1RoutineEachFrame());
      span6LoopScheduler.add(warning1RoutineEnd(snapshot));
      const ensayos6LoopScheduler = new Scheduler(psychoJS);
      span6LoopScheduler.add(ensayos6LoopBegin(ensayos6LoopScheduler, snapshot));
      span6LoopScheduler.add(ensayos6LoopScheduler);
      span6LoopScheduler.add(ensayos6LoopEnd);
      span6LoopScheduler.add(RecallRoutineBegin(snapshot));
      span6LoopScheduler.add(RecallRoutineEachFrame());
      span6LoopScheduler.add(RecallRoutineEnd(snapshot));
      span6LoopScheduler.add(span6LoopEndIteration(span6LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

function ensayos6LoopBegin(ensayos6LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    ensayos6 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, Eligebloque, '16:22'),
      seed: undefined, name: 'ensayos6'
    });
    psychoJS.experiment.addLoop(ensayos6); // add the loop to the experiment
    currentLoop = ensayos6;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisEnsayos6 of ensayos6) {
      snapshot = ensayos6.getSnapshot();
      ensayos6LoopScheduler.add(importConditions(snapshot));
      ensayos6LoopScheduler.add(trialRoutineBegin(snapshot));
      ensayos6LoopScheduler.add(trialRoutineEachFrame());
      ensayos6LoopScheduler.add(trialRoutineEnd(snapshot));
      ensayos6LoopScheduler.add(memRoutineBegin(snapshot));
      ensayos6LoopScheduler.add(memRoutineEachFrame());
      ensayos6LoopScheduler.add(memRoutineEnd(snapshot));
      ensayos6LoopScheduler.add(ensayos6LoopEndIteration(ensayos6LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function ensayos6LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(ensayos6);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function ensayos6LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

async function span6LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(span6);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function span6LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function retention_loopLoopBegin(retention_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    retention_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'retention_questions.xlsx',
      seed: undefined, name: 'retention_loop'
    });
    psychoJS.experiment.addLoop(retention_loop); // add the loop to the experiment
    currentLoop = retention_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisRetention_loop of retention_loop) {
      snapshot = retention_loop.getSnapshot();
      retention_loopLoopScheduler.add(importConditions(snapshot));
      retention_loopLoopScheduler.add(test_ratingRoutineBegin(snapshot));
      retention_loopLoopScheduler.add(test_ratingRoutineEachFrame());
      retention_loopLoopScheduler.add(test_ratingRoutineEnd(snapshot));
      retention_loopLoopScheduler.add(retention_loopLoopEndIteration(retention_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function retention_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(retention_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function retention_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function expertise_questionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'expertise_question' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    expertise_questionClock.reset();
    routineTimer.reset();
    expertise_questionMaxDurationReached = false;
    // update component parameters for each repeat
    question_text.setText(question);
    expertise_answer.setText('');
    expertise_answer.refresh();
    key_respexpert.keys = undefined;
    key_respexpert.rt = undefined;
    _key_respexpert_allKeys = [];
    psychoJS.experiment.addData('expertise_question.started', globalClock.getTime());
    expertise_questionMaxDuration = null
    // keep track of which components have finished
    expertise_questionComponents = [];
    expertise_questionComponents.push(question_text);
    expertise_questionComponents.push(expertise_answer);
    expertise_questionComponents.push(key_respexpert);
    
    for (const thisComponent of expertise_questionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function expertise_questionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'expertise_question' ---
    // get current time
    t = expertise_questionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *question_text* updates
    if (t >= 0.0 && question_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_text.tStart = t;  // (not accounting for frame time here)
      question_text.frameNStart = frameN;  // exact frame index
      
      question_text.setAutoDraw(true);
    }
    
    
    // *expertise_answer* updates
    if (t >= 0.0 && expertise_answer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      expertise_answer.tStart = t;  // (not accounting for frame time here)
      expertise_answer.frameNStart = frameN;  // exact frame index
      
      expertise_answer.setAutoDraw(true);
    }
    
    
    // *key_respexpert* updates
    if (t >= 0.5 && key_respexpert.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_respexpert.tStart = t;  // (not accounting for frame time here)
      key_respexpert.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_respexpert.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_respexpert.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_respexpert.clearEvents(); });
    }
    
    if (key_respexpert.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_respexpert.getKeys({keyList: ['return'], waitRelease: false});
      _key_respexpert_allKeys = _key_respexpert_allKeys.concat(theseKeys);
      if (_key_respexpert_allKeys.length > 0) {
        key_respexpert.keys = _key_respexpert_allKeys[_key_respexpert_allKeys.length - 1].name;  // just the last key pressed
        key_respexpert.rt = _key_respexpert_allKeys[_key_respexpert_allKeys.length - 1].rt;
        key_respexpert.duration = _key_respexpert_allKeys[_key_respexpert_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of expertise_questionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function expertise_questionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'expertise_question' ---
    for (const thisComponent of expertise_questionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('expertise_question.stopped', globalClock.getTime());
    psychoJS.experiment.addData('expertise_answer.text',expertise_answer.text)
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_respexpert.corr, level);
    }
    psychoJS.experiment.addData('key_respexpert.keys', key_respexpert.keys);
    if (typeof key_respexpert.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_respexpert.rt', key_respexpert.rt);
        psychoJS.experiment.addData('key_respexpert.duration', key_respexpert.duration);
        routineTimer.reset();
        }
    
    key_respexpert.stop();
    // the Routine "expertise_question" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function instr_aospanRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_aospan' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instr_aospanClock.reset();
    routineTimer.reset();
    instr_aospanMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    psychoJS.experiment.addData('instr_aospan.started', globalClock.getTime());
    instr_aospanMaxDuration = null
    // keep track of which components have finished
    instr_aospanComponents = [];
    instr_aospanComponents.push(text_4);
    instr_aospanComponents.push(key_resp_5);
    
    for (const thisComponent of instr_aospanComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function instr_aospanRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_aospan' ---
    // get current time
    t = instr_aospanClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }
    
    
    // *key_resp_5* updates
    if (t >= 1.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }
    
    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        key_resp_5.duration = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instr_aospanComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function instr_aospanRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_aospan' ---
    for (const thisComponent of instr_aospanComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instr_aospan.stopped', globalClock.getTime());
    key_resp_5.stop();
    // the Routine "instr_aospan" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function warningeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'warninge' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    warningeClock.reset(routineTimer.getTime());
    routineTimer.add(2.000000);
    warningeMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('warninge.started', globalClock.getTime());
    warningeMaxDuration = null
    // keep track of which components have finished
    warningeComponents = [];
    warningeComponents.push(text_6);
    
    for (const thisComponent of warningeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function warningeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'warninge' ---
    // get current time
    t = warningeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_6.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of warningeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function warningeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'warninge' ---
    for (const thisComponent of warningeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('warninge.stopped', globalClock.getTime());
    if (warningeMaxDurationReached) {
        warningeClock.add(warningeMaxDuration);
    } else {
        warningeClock.add(2.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trialClock.reset();
    routineTimer.reset();
    trialMaxDurationReached = false;
    // update component parameters for each repeat
    text.setText(Estimulo);
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    trialMaxDuration = null
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(text);
    trialComponents.push(key_resp_2);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.3 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // *key_resp_2* updates
    if (t >= 0.3 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp_2.keys == Respuesta) {
            key_resp_2.corr = 1;
        } else {
            key_resp_2.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_resp_2.keys === undefined) {
      if (['None','none',undefined].includes(Respuesta)) {
         key_resp_2.corr = 1;  // correct non-response
      } else {
         key_resp_2.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    psychoJS.experiment.addData('key_resp_2.corr', key_resp_2.corr);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function memRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'mem' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    memClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    memMaxDurationReached = false;
    // update component parameters for each repeat
    text_2.setText(Letra);
    psychoJS.experiment.addData('mem.started', globalClock.getTime());
    memMaxDuration = null
    // keep track of which components have finished
    memComponents = [];
    memComponents.push(text_2);
    
    for (const thisComponent of memComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function memRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'mem' ---
    // get current time
    t = memClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_2.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of memComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function memRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'mem' ---
    for (const thisComponent of memComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('mem.stopped', globalClock.getTime());
    if (memMaxDurationReached) {
        memClock.add(memMaxDuration);
    } else {
        memClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function RecallRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Recall' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    RecallClock.reset();
    routineTimer.reset();
    RecallMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    psychoJS.experiment.addData('Recall.started', globalClock.getTime());
    RecallMaxDuration = null
    // keep track of which components have finished
    RecallComponents = [];
    RecallComponents.push(text_3);
    RecallComponents.push(key_resp_3);
    RecallComponents.push(key_resp_4);
    
    for (const thisComponent of RecallComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function RecallRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Recall' ---
    // get current time
    t = RecallClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    
    // *key_resp_3* updates
    if (t >= 0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
    }
    
    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['q', 'r', 't', 'p', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys.map((key) => key.name);  // storing all keys
        key_resp_3.rt = _key_resp_3_allKeys.map((key) => key.rt);
        key_resp_3.duration = _key_resp_3_allKeys.map((key) => key.duration);
      }
    }
    
    
    // *key_resp_4* updates
    if (t >= 0.5 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }
    
    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        key_resp_4.duration = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of RecallComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function RecallRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Recall' ---
    for (const thisComponent of RecallComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Recall.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        psychoJS.experiment.addData('key_resp_3.duration', key_resp_3.duration);
        }
    
    key_resp_3.stop();
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_4.corr, level);
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        psychoJS.experiment.addData('key_resp_4.duration', key_resp_4.duration);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "Recall" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function warning1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'warning1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    warning1Clock.reset(routineTimer.getTime());
    routineTimer.add(1.500000);
    warning1MaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('warning1.started', globalClock.getTime());
    warning1MaxDuration = null
    // keep track of which components have finished
    warning1Components = [];
    warning1Components.push(text_5);
    
    for (const thisComponent of warning1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function warning1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'warning1' ---
    // get current time
    t = warning1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_5.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of warning1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function warning1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'warning1' ---
    for (const thisComponent of warning1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('warning1.stopped', globalClock.getTime());
    if (warning1MaxDurationReached) {
        warning1Clock.add(warning1MaxDuration);
    } else {
        warning1Clock.add(1.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function video_instructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'video_instruction' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    video_instructionClock.reset();
    routineTimer.reset();
    video_instructionMaxDurationReached = false;
    // update component parameters for each repeat
    vdeonstranw.keys = undefined;
    vdeonstranw.rt = undefined;
    _vdeonstranw_allKeys = [];
    psychoJS.experiment.addData('video_instruction.started', globalClock.getTime());
    video_instructionMaxDuration = null
    // keep track of which components have finished
    video_instructionComponents = [];
    video_instructionComponents.push(text_instrvideo);
    video_instructionComponents.push(vdeonstranw);
    
    for (const thisComponent of video_instructionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function video_instructionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'video_instruction' ---
    // get current time
    t = video_instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_instrvideo* updates
    if (t >= 0.0 && text_instrvideo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instrvideo.tStart = t;  // (not accounting for frame time here)
      text_instrvideo.frameNStart = frameN;  // exact frame index
      
      text_instrvideo.setAutoDraw(true);
    }
    
    
    // *vdeonstranw* updates
    if (t >= 0.5 && vdeonstranw.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vdeonstranw.tStart = t;  // (not accounting for frame time here)
      vdeonstranw.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { vdeonstranw.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { vdeonstranw.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { vdeonstranw.clearEvents(); });
    }
    
    if (vdeonstranw.status === PsychoJS.Status.STARTED) {
      let theseKeys = vdeonstranw.getKeys({keyList: ['space'], waitRelease: false});
      _vdeonstranw_allKeys = _vdeonstranw_allKeys.concat(theseKeys);
      if (_vdeonstranw_allKeys.length > 0) {
        vdeonstranw.keys = _vdeonstranw_allKeys[_vdeonstranw_allKeys.length - 1].name;  // just the last key pressed
        vdeonstranw.rt = _vdeonstranw_allKeys[_vdeonstranw_allKeys.length - 1].rt;
        vdeonstranw.duration = _vdeonstranw_allKeys[_vdeonstranw_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of video_instructionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function video_instructionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'video_instruction' ---
    for (const thisComponent of video_instructionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('video_instruction.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(vdeonstranw.corr, level);
    }
    psychoJS.experiment.addData('vdeonstranw.keys', vdeonstranw.keys);
    if (typeof vdeonstranw.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('vdeonstranw.rt', vdeonstranw.rt);
        psychoJS.experiment.addData('vdeonstranw.duration', vdeonstranw.duration);
        routineTimer.reset();
        }
    
    vdeonstranw.stop();
    // the Routine "video_instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function videooRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'videoo' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    videooClock.reset();
    routineTimer.reset();
    videooMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('videoo.started', globalClock.getTime());
    videooMaxDuration = null
    // keep track of which components have finished
    videooComponents = [];
    videooComponents.push(nonr_movie);
    
    for (const thisComponent of videooComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function videooRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'videoo' ---
    // get current time
    t = videooClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *nonr_movie* updates
    if (t >= 0.0 && nonr_movie.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nonr_movie.tStart = t;  // (not accounting for frame time here)
      nonr_movie.frameNStart = frameN;  // exact frame index
      
      nonr_movie.setAutoDraw(true);
      nonr_movie.play();
    }
    
    if (nonr_movie.status === PsychoJS.Status.FINISHED) {  // force-end the Routine
        continueRoutine = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of videooComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function videooRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'videoo' ---
    for (const thisComponent of videooComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('videoo.stopped', globalClock.getTime());
    nonr_movie.stop();  // ensure movie has stopped at end of Routine
    // the Routine "videoo" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function load_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'load_instr' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    load_instrClock.reset();
    routineTimer.reset();
    load_instrMaxDurationReached = false;
    // update component parameters for each repeat
    key_resploaad.keys = undefined;
    key_resploaad.rt = undefined;
    _key_resploaad_allKeys = [];
    psychoJS.experiment.addData('load_instr.started', globalClock.getTime());
    load_instrMaxDuration = null
    // keep track of which components have finished
    load_instrComponents = [];
    load_instrComponents.push(load_txt);
    load_instrComponents.push(key_resploaad);
    
    for (const thisComponent of load_instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function load_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'load_instr' ---
    // get current time
    t = load_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *load_txt* updates
    if (t >= 0.0 && load_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      load_txt.tStart = t;  // (not accounting for frame time here)
      load_txt.frameNStart = frameN;  // exact frame index
      
      load_txt.setAutoDraw(true);
    }
    
    
    // *key_resploaad* updates
    if (t >= 0.5 && key_resploaad.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resploaad.tStart = t;  // (not accounting for frame time here)
      key_resploaad.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resploaad.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resploaad.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resploaad.clearEvents(); });
    }
    
    if (key_resploaad.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resploaad.getKeys({keyList: ['space'], waitRelease: false});
      _key_resploaad_allKeys = _key_resploaad_allKeys.concat(theseKeys);
      if (_key_resploaad_allKeys.length > 0) {
        key_resploaad.keys = _key_resploaad_allKeys[_key_resploaad_allKeys.length - 1].name;  // just the last key pressed
        key_resploaad.rt = _key_resploaad_allKeys[_key_resploaad_allKeys.length - 1].rt;
        key_resploaad.duration = _key_resploaad_allKeys[_key_resploaad_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of load_instrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function load_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'load_instr' ---
    for (const thisComponent of load_instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('load_instr.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resploaad.corr, level);
    }
    psychoJS.experiment.addData('key_resploaad.keys', key_resploaad.keys);
    if (typeof key_resploaad.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resploaad.rt', key_resploaad.rt);
        psychoJS.experiment.addData('key_resploaad.duration', key_resploaad.duration);
        routineTimer.reset();
        }
    
    key_resploaad.stop();
    // the Routine "load_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function load_umRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'load_um' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    load_umClock.reset();
    routineTimer.reset();
    load_umMaxDurationReached = false;
    // update component parameters for each repeat
    paas.reset()
    psychoJS.experiment.addData('load_um.started', globalClock.getTime());
    load_umMaxDuration = null
    // keep track of which components have finished
    load_umComponents = [];
    load_umComponents.push(text_umm);
    load_umComponents.push(paas);
    
    for (const thisComponent of load_umComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function load_umRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'load_um' ---
    // get current time
    t = load_umClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_umm* updates
    if (t >= 0.0 && text_umm.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_umm.tStart = t;  // (not accounting for frame time here)
      text_umm.frameNStart = frameN;  // exact frame index
      
      text_umm.setAutoDraw(true);
    }
    
    
    // *paas* updates
    if (t >= 0.0 && paas.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      paas.tStart = t;  // (not accounting for frame time here)
      paas.frameNStart = frameN;  // exact frame index
      
      paas.setAutoDraw(true);
    }
    
    
    // Check paas for response to end Routine
    if (paas.getRating() !== undefined && paas.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of load_umComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function load_umRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'load_um' ---
    for (const thisComponent of load_umComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('load_um.stopped', globalClock.getTime());
    psychoJS.experiment.addData('paas.response', paas.getRating());
    psychoJS.experiment.addData('paas.rt', paas.getRT());
    // the Routine "load_um" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function load_fsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'load_fs' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    load_fsClock.reset();
    routineTimer.reset();
    load_fsMaxDurationReached = false;
    // update component parameters for each repeat
    umstvennaya_2.reset()
    psychoJS.experiment.addData('load_fs.started', globalClock.getTime());
    load_fsMaxDuration = null
    // keep track of which components have finished
    load_fsComponents = [];
    load_fsComponents.push(text_umm_2);
    load_fsComponents.push(umstvennaya_2);
    
    for (const thisComponent of load_fsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function load_fsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'load_fs' ---
    // get current time
    t = load_fsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_umm_2* updates
    if (t >= 0.0 && text_umm_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_umm_2.tStart = t;  // (not accounting for frame time here)
      text_umm_2.frameNStart = frameN;  // exact frame index
      
      text_umm_2.setAutoDraw(true);
    }
    
    
    // *umstvennaya_2* updates
    if (t >= 0.0 && umstvennaya_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      umstvennaya_2.tStart = t;  // (not accounting for frame time here)
      umstvennaya_2.frameNStart = frameN;  // exact frame index
      
      umstvennaya_2.setAutoDraw(true);
    }
    
    
    // Check umstvennaya_2 for response to end Routine
    if (umstvennaya_2.getRating() !== undefined && umstvennaya_2.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of load_fsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function load_fsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'load_fs' ---
    for (const thisComponent of load_fsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('load_fs.stopped', globalClock.getTime());
    psychoJS.experiment.addData('umstvennaya_2.response', umstvennaya_2.getRating());
    psychoJS.experiment.addData('umstvennaya_2.rt', umstvennaya_2.getRT());
    // the Routine "load_fs" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function testinstrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'testinstr' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    testinstrClock.reset();
    routineTimer.reset();
    testinstrMaxDurationReached = false;
    // update component parameters for each repeat
    key_respque.keys = undefined;
    key_respque.rt = undefined;
    _key_respque_allKeys = [];
    psychoJS.experiment.addData('testinstr.started', globalClock.getTime());
    testinstrMaxDuration = null
    // keep track of which components have finished
    testinstrComponents = [];
    testinstrComponents.push(text_que);
    testinstrComponents.push(key_respque);
    
    for (const thisComponent of testinstrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function testinstrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'testinstr' ---
    // get current time
    t = testinstrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_que* updates
    if (t >= 0.0 && text_que.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_que.tStart = t;  // (not accounting for frame time here)
      text_que.frameNStart = frameN;  // exact frame index
      
      text_que.setAutoDraw(true);
    }
    
    
    // *key_respque* updates
    if (t >= 0.5 && key_respque.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_respque.tStart = t;  // (not accounting for frame time here)
      key_respque.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_respque.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_respque.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_respque.clearEvents(); });
    }
    
    if (key_respque.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_respque.getKeys({keyList: ['space'], waitRelease: false});
      _key_respque_allKeys = _key_respque_allKeys.concat(theseKeys);
      if (_key_respque_allKeys.length > 0) {
        key_respque.keys = _key_respque_allKeys[_key_respque_allKeys.length - 1].name;  // just the last key pressed
        key_respque.rt = _key_respque_allKeys[_key_respque_allKeys.length - 1].rt;
        key_respque.duration = _key_respque_allKeys[_key_respque_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of testinstrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function testinstrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'testinstr' ---
    for (const thisComponent of testinstrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('testinstr.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_respque.corr, level);
    }
    psychoJS.experiment.addData('key_respque.keys', key_respque.keys);
    if (typeof key_respque.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_respque.rt', key_respque.rt);
        psychoJS.experiment.addData('key_respque.duration', key_respque.duration);
        routineTimer.reset();
        }
    
    key_respque.stop();
    // the Routine "testinstr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function test_ratingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'test_rating' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    test_ratingClock.reset();
    routineTimer.reset();
    test_ratingMaxDurationReached = false;
    // update component parameters for each repeat
    ret_question_text.setText(questions);
    ret_answer.setText('');
    ret_answer.refresh();
    key_resptestt.keys = undefined;
    key_resptestt.rt = undefined;
    _key_resptestt_allKeys = [];
    psychoJS.experiment.addData('test_rating.started', globalClock.getTime());
    test_ratingMaxDuration = null
    // keep track of which components have finished
    test_ratingComponents = [];
    test_ratingComponents.push(ret_question_text);
    test_ratingComponents.push(ret_answer);
    test_ratingComponents.push(key_resptestt);
    
    for (const thisComponent of test_ratingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function test_ratingRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'test_rating' ---
    // get current time
    t = test_ratingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ret_question_text* updates
    if (t >= 0.0 && ret_question_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ret_question_text.tStart = t;  // (not accounting for frame time here)
      ret_question_text.frameNStart = frameN;  // exact frame index
      
      ret_question_text.setAutoDraw(true);
    }
    
    
    // *ret_answer* updates
    if (t >= 0.0 && ret_answer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ret_answer.tStart = t;  // (not accounting for frame time here)
      ret_answer.frameNStart = frameN;  // exact frame index
      
      ret_answer.setAutoDraw(true);
    }
    
    
    // *key_resptestt* updates
    if (t >= 0.0 && key_resptestt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resptestt.tStart = t;  // (not accounting for frame time here)
      key_resptestt.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resptestt.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resptestt.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resptestt.clearEvents(); });
    }
    
    if (key_resptestt.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resptestt.getKeys({keyList: ['return'], waitRelease: false});
      _key_resptestt_allKeys = _key_resptestt_allKeys.concat(theseKeys);
      if (_key_resptestt_allKeys.length > 0) {
        key_resptestt.keys = _key_resptestt_allKeys[_key_resptestt_allKeys.length - 1].name;  // just the last key pressed
        key_resptestt.rt = _key_resptestt_allKeys[_key_resptestt_allKeys.length - 1].rt;
        key_resptestt.duration = _key_resptestt_allKeys[_key_resptestt_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of test_ratingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function test_ratingRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'test_rating' ---
    for (const thisComponent of test_ratingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('test_rating.stopped', globalClock.getTime());
    psychoJS.experiment.addData('ret_answer.text',ret_answer.text)
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resptestt.corr, level);
    }
    psychoJS.experiment.addData('key_resptestt.keys', key_resptestt.keys);
    if (typeof key_resptestt.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resptestt.rt', key_resptestt.rt);
        psychoJS.experiment.addData('key_resptestt.duration', key_resptestt.duration);
        routineTimer.reset();
        }
    
    key_resptestt.stop();
    // the Routine "test_rating" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function ebatspsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ebatsps' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    ebatspsClock.reset(routineTimer.getTime());
    routineTimer.add(2.000000);
    ebatspsMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from codevas
    psychoJS._saveResults = 0;
    
    // Generate filename for results
    let filename = psychoJS._experiment._experimentName + '_' + psychoJS._experiment._datetime + '.csv';
    // Extract data object from experiment
    let dataObj = psychoJS._experiment._trialsData;
    // Convert data object to CSV
    let data = [Object.keys(databObj[0])].concat(databObj).map(it => {
        return Object.values(it).toString()
    }).join('\n')
    // Send data to OSF via DataPipe
    console.log('Saving data...');
    fetch('https://pipe.jspsych.org/api/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
        },
        body: JSON.stringify({
            experimentID: 'wAcfB3jLtgzi',
            filename: filename,
            data: data,
        }),
    }).then(response => response.json()).then(data => {
    // Log response aud force experiment end
        console.log(data);
        quitPsychoJS();
    })
    psychoJS.experiment.addData('ebatsps.started', globalClock.getTime());
    ebatspsMaxDuration = null
    // keep track of which components have finished
    ebatspsComponents = [];
    ebatspsComponents.push(text_sps);
    
    for (const thisComponent of ebatspsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function ebatspsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ebatsps' ---
    // get current time
    t = ebatspsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_sps* updates
    if (t >= 0.0 && text_sps.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_sps.tStart = t;  // (not accounting for frame time here)
      text_sps.frameNStart = frameN;  // exact frame index
      
      text_sps.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_sps.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_sps.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ebatspsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function ebatspsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ebatsps' ---
    for (const thisComponent of ebatspsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ebatsps.stopped', globalClock.getTime());
    if (ebatspsMaxDurationReached) {
        ebatspsClock.add(ebatspsMaxDuration);
    } else {
        ebatspsClock.add(2.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}

async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
