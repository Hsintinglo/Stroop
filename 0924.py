from psychopy import visual, core, event

# Create a window
win = visual.Window(size=(1200, 800), color=(0, 0, 0), units='pix')

# Define stimuli
word_stim = visual.TextStim(win, text='', color=(1, 1, 1), height=40, pos=(0, 0))

# Define trial list
trial_list = [
    {'word': 'RED', 'color': 'red'},
    {'word': 'BLUE', 'color': 'blue'},
    {'word': 'GREEN', 'color': 'green'}
]  # Add more trials as needed

# Randomize trial order
import random
random.shuffle(trial_list)

# Run the experiment
for trial in trial_list:
     # Present fixation cross
     fixation_cross = visual.TextStim(win, text='+', color=(1, 1, 1), height=40, pos=(0, 0))
word_stim = visual.TextStim(win, text='', color=(1, 1, 1), height=40, pos=(0, 0, 
    fixation_cross.draw()
    win.flip()
    core.wait(0.5)  # Adjust duration as needed
    
    word = trial['word']
    color = trial['color']
    
    # Prepare trial
    word_stim.text = word
    word_stim.color = color
    
    # Present trial
    word_stim.draw()
    win.flip()
    
    # Collect response
    keys = event.waitKeys(keyList=['1', '2', '3'])  # Adjust keyList as needed
    
    # Print trial information and response
    response = keys[0] if keys else 'No response'
    print(f'Trial:, word} / {color}, Response: {response}')
    
    # Pause between trials (adjust as needed)
    core.wait(1.0)

# Clean up
win.close()
core.quit()