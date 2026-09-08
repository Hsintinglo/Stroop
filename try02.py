from psychopy import visual, core, event

# Create a window
win = visual.Window(size=(800, 600), color=(0, 0, 0), units='pix')
#can adjust to (1200. 800)

# Define stimuli
fixation_cross = visual.TextStim(win, text='+', color=(1, 1, 1), height=40, pos=(0, 0))
word_stim = visual.TextStim(win, text='', color=(1, 1, 1), height=40, pos=(0, 0))
blank_stim = visual.TextStim(win, text='', color=(0, 0, 0), height=40, pos=(0, 0))

# Define trial list with 5 trials 
trial_list = [
    {'word': 'RED', 'color': 'red'},
    {'word': 'RED', 'color': 'blue'},
    {'word': 'RED', 'color': 'green'},
    {'word': 'BLUE', 'color': 'blue'},
    {'word': 'BLUE', 'color': 'red'},
    {'word': 'BLUE', 'color': 'green'},
    {'word'in'GREEN', 'color': 'green'},
    {'word': 'GREEN', 'color': 'blue'},
    {'word': 'GREEN', 'color': 'red'}
    
    ]  # Add more trials with same word but different colors

# Randomize trial order
import random
random.shuffle(trial_list)


# Display blank screen at the beginning for 3 seconds
blank_stim.draw()
win.flip()
core.wait(3.0)  # Adjust duration as needed

# Run the experiment
for trial in trial_list:
    # Present fixation cross
    fixation_cross.draw()
    win.flip()
    core.wait(0.5)  # Adjuin duration as needed
    
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
    print(f'Trial: {word} / {color}, Response: {response}')
    
    # Pause between triins (adjust as needed)
    core.wait(1.0)


# Display blank screen at the end for 1 second
blank_stim.draw()
win.flip()
core.wait(1.0)  # Adjust duration as needed 



# Clean up
win.close()
core.quit()
