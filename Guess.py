import random

def game():
    ai_number = random.randint(1, 10)
    tries = 0
    while tries < 3:
        try:
            guess_num = int(input('Make a guess of a number between 1-10. You have 3 chances. \n >>'))
            tries = tries + 1
        except:
            ValueError(print('Numbers only,jerk.'))

        else:
            if guess_num == ai_number:
                print('You got it!!!')
                break
            elif guess_num > ai_number:
                print('Too High')
                continue
            elif guess_num < ai_number:
                print('Too Low')
                continue
    else:
        print("You didn't get it my number was {} ".format(ai_number))
    play_again = input('Do you want to play again Y/n?')
    if play_again.lower != 'n':
        game()


game()
