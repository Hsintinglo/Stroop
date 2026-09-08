/****************** 
 * Stroopexp *
 ******************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2023.2.2.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'stroopExp';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
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
  color: new util.Color([0,0,0]),
  units: 'height',
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
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(welcome_screenRoutineBegin());
flowScheduler.add(welcome_screenRoutineEachFrame());
flowScheduler.add(welcome_screenRoutineEnd());
flowScheduler.add(blank_500RoutineBegin());
flowScheduler.add(blank_500RoutineEachFrame());
flowScheduler.add(blank_500RoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);



flowScheduler.add(Goodbye_ScreenRoutineBegin());
flowScheduler.add(Goodbye_ScreenRoutineEachFrame());
flowScheduler.add(Goodbye_ScreenRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'stroop.stimuli.xlsx', 'path': 'stroop.stimuli.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2023.2.2';
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


var welcome_screen_Clock;
var textWelcomeMessage;
var key_Welcome;
var blank_500Clock;
var textBlank500;
var stroop_trialClock;
var textStroopWord;
var keyStroop;
var Goodbye_ScreenClock;
var textGoodbye;
var key_goodbye;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "welcome_screen_"
  welcome_screen_Clock = new util.Clock();
  textWelcomeMessage = new visual.TextStim({
    win: psychoJS.window,
    name: 'textWelcomeMessage',
    text: 'Welcome to the experiment\n\nPress " Spacebar" to start',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_Welcome = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "blank_500"
  blank_500Clock = new util.Clock();
  textBlank500 = new visual.TextStim({
    win: psychoJS.window,
    name: 'textBlank500',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "stroop_trial"
  stroop_trialClock = new util.Clock();
  textStroopWord = new visual.TextStim({
    win: psychoJS.window,
    name: 'textStroopWord',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  keyStroop = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Goodbye_Screen"
  Goodbye_ScreenClock = new util.Clock();
  textGoodbye = new visual.TextStim({
    win: psychoJS.window,
    name: 'textGoodbye',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_goodbye = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_Welcome_allKeys;
var welcome_screenComponents;
function welcome_screenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'welcome_screen' ---
    t = 0;
    welcome_screenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('welcome_screen.started', globalClock.getTime());
    key_Welcome.keys = undefined;
    key_Welcome.rt = undefined;
    _key_Welcome_allKeys = [];
    // keep track of which components have finished
    welcome_screenComponents = [];
    welcome_screen_Components.push(textWelcomeMessage);
    welcome_screen_Components.push(key_Welcome);
    
    for (const thisComponent of welcome_screenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function welcome_screenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcome_screen' ---
    // get current time
    t = welcome_screenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textWelcomeMessage* updates
    if (t >= 0.0 && textWelcomeMessage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textWelcomeMessage.tStart = t;  // (not accounting for frame time here)
      textWelcomeMessage.frameNStart = frameN;  // exact frame index
      
      textWelcomeMessage.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (textWelcomeMessage.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textWelcomeMessage.setAutoDraw(false);
    }
    
    // *key_Welcome* updates
    if (t >= 0.0 && key_Welcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_Welcome.tStart = t;  // (not accounting for frame time here)
      key_Welcome.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_Welcome.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_Welcome.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_Welcome.clearEvents(); });
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_Welcome.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_Welcome.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_Welcome.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_Welcome.getKeys({keyList: ['space'], waitRelease: false});
      _key_Welcome_allKeys = _key_Welcome_allKeys.concat(theseKeys);
      if (_key_Welcome_allKeys.length > 0) {
        key_Welcome.keys = _key_Welcome_allKeys[_key_Welcome_allKeys.length - 1].name;  // just the last key pressed
        key_Welcome.rt = _key_Welcome_allKeys[_key_Welcome_allKeys.length - 1].rt;
        key_Welcome.duration = _key_Welcome_allKeys[_key_Welcome_allKeys.length - 1].duration;
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
    for (const thisComponent of welcome_screenComponents)
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


function welcome_screenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcome_screen' ---
    for (const thisComponent of welcome_screenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('welcome_screen.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_Welcome.corr, level);
    }
    psychoJS.experiment.addData('key_Welcome.keys', key_Welcome.keys);
    if (typeof key_Welcome.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_Welcome.rt', key_Welcome.rt);
        psychoJS.experiment.addData('key_Welcome.duration', key_Welcome.duration);
        routineTimer.reset();
        }
    
    key_Welcome.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var blank_500Components;
function blank_500RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'blank_500' ---
    t = 0;
    blank_500Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('blank_500.started', globalClock.getTime());
    // keep track of which components have finished
    blank_500Components = [];
    blank_500Components.push(textBlank500);
    
    for (const thisComponent of blank_500Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function blank_500RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'blank_500' ---
    // get current time
    t = blank_500Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textBlank500* updates
    if (t >= 0.0 && textBlank500.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textBlank500.tStart = t;  // (not accounting for frame time here)
      textBlank500.frameNStart = frameN;  // exact frame index
      
      textBlank500.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (textBlank500.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textBlank500.setAutoDraw(false);
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
    for (const thisComponent of blank_500Components)
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


function blank_500RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'blank_500' ---
    for (const thisComponent of blank_500Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('blank_500.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 5, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'stroop.stimuli.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(stroop_trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(stroop_trialRoutineEachFrame());
      trialsLoopScheduler.add(stroop_trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(blank_500RoutineBegin(snapshot));
      trialsLoopScheduler.add(blank_500RoutineEachFrame());
      trialsLoopScheduler.add(blank_500RoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
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
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var _keyStroop_allKeys;
var stroop_trialComponents;
function stroop_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'stroop_trial' ---
    t = 0;
    stroop_trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(20.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('stroop_trial.started', globalClock.getTime());
    textStroopWord.setColor(new util.Color(colour));
    textStroopWord.setText(word);
    keyStroop.keys = undefined;
    keyStroop.rt = undefined;
    _keyStroop_allKeys = [];
    // keep track of which components have finished
    stroop_trialComponents = [];
    stroop_trialComponents.push(textStroopWord);
    stroop_trialComponents.push(keyStroop);
    
    for (const thisComponent of stroop_trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function stroop_trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'stroop_trial' ---
    // get current time
    t = stroop_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textStroopWord* updates
    if (t >= 0.0 && textStroopWord.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textStroopWord.tStart = t;  // (not accounting for frame time here)
      textStroopWord.frameNStart = frameN;  // exact frame index
      
      textStroopWord.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (textStroopWord.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textStroopWord.setAutoDraw(false);
    }
    
    // *keyStroop* updates
    if (t >= 0.0 && keyStroop.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keyStroop.tStart = t;  // (not accounting for frame time here)
      keyStroop.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { keyStroop.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { keyStroop.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { keyStroop.clearEvents(); });
    }
    
    frameRemains = 0.0 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (keyStroop.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      keyStroop.status = PsychoJS.Status.FINISHED;
        }
      
    if (keyStroop.status === PsychoJS.Status.STARTED) {
      let theseKeys = keyStroop.getKeys({keyList: ['r', 'g', 'b', 'y'], waitRelease: false});
      _keyStroop_allKeys = _keyStroop_allKeys.concat(theseKeys);
      if (_keyStroop_allKeys.length > 0) {
        keyStroop.keys = _keyStroop_allKeys[_keyStroop_allKeys.length - 1].name;  // just the last key pressed
        keyStroop.rt = _keyStroop_allKeys[_keyStroop_allKeys.length - 1].rt;
        keyStroop.duration = _keyStroop_allKeys[_keyStroop_allKeys.length - 1].duration;
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
    for (const thisComponent of stroop_trialComponents)
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


function stroop_trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'stroop_trial' ---
    for (const thisComponent of stroop_trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('stroop_trial.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(keyStroop.corr, level);
    }
    psychoJS.experiment.addData('keyStroop.keys', keyStroop.keys);
    if (typeof keyStroop.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('keyStroop.rt', keyStroop.rt);
        psychoJS.experiment.addData('keyStroop.duration', keyStroop.duration);
        routineTimer.reset();
        }
    
    keyStroop.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_goodbye_allKeys;
var Goodbye_ScreenComponents;
function Goodbye_ScreenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Goodbye_Screen' ---
    t = 0;
    Goodbye_ScreenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(20.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('Goodbye_Screen.started', globalClock.getTime());
    textGoodbye.setText('Thanks for participating\n\n');
    key_goodbye.keys = undefined;
    key_goodbye.rt = undefined;
    _key_goodbye_allKeys = [];
    // keep track of which components have finished
    Goodbye_ScreenComponents = [];
    Goodbye_ScreenComponents.push(textGoodbye);
    Goodbye_ScreenComponents.push(key_goodbye);
    
    for (const thisComponent of Goodbye_ScreenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Goodbye_ScreenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Goodbye_Screen' ---
    // get current time
    t = Goodbye_ScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textGoodbye* updates
    if (t >= 0.0 && textGoodbye.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textGoodbye.tStart = t;  // (not accounting for frame time here)
      textGoodbye.frameNStart = frameN;  // exact frame index
      
      textGoodbye.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (textGoodbye.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textGoodbye.setAutoDraw(false);
    }
    
    // *key_goodbye* updates
    if (t >= 0.0 && key_goodbye.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_goodbye.tStart = t;  // (not accounting for frame time here)
      key_goodbye.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_goodbye.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_goodbye.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_goodbye.clearEvents(); });
    }
    
    frameRemains = 0.0 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_goodbye.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_goodbye.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_goodbye.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_goodbye.getKeys({keyList: ['space'], waitRelease: false});
      _key_goodbye_allKeys = _key_goodbye_allKeys.concat(theseKeys);
      if (_key_goodbye_allKeys.length > 0) {
        key_goodbye.keys = _key_goodbye_allKeys[_key_goodbye_allKeys.length - 1].name;  // just the last key pressed
        key_goodbye.rt = _key_goodbye_allKeys[_key_goodbye_allKeys.length - 1].rt;
        key_goodbye.duration = _key_goodbye_allKeys[_key_goodbye_allKeys.length - 1].duration;
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
    for (const thisComponent of Goodbye_ScreenComponents)
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


function Goodbye_ScreenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Goodbye_Screen' ---
    for (const thisComponent of Goodbye_ScreenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Goodbye_Screen.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_goodbye.corr, level);
    }
    psychoJS.experiment.addData('key_goodbye.keys', key_goodbye.keys);
    if (typeof key_goodbye.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_goodbye.rt', key_goodbye.rt);
        psychoJS.experiment.addData('key_goodbye.duration', key_goodbye.duration);
        routineTimer.reset();
        }
    
    key_goodbye.stop();
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
