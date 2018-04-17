import random
print "Welcome to guess the number\n==========================="
print('Hello! What is your name?')
myName = raw_input()
print('Well, ' + myName + ', I am thinking of a number between 1 and 20, you have to guess what it is in as few attempts as possible.\n')
n = random.randint(1, 20)
attempts = 0
guess = int(raw_input("Enter an integer from 1 to 20: "))
while n != "guess" and attempts < 6:
    
    if guess < n:
        print("Our guess range is between 1 and 20, please try a bit high")
        guess = int(raw_input("Enter an integer from 1 to 20: "))
	attempts += 1
    elif guess > n:
        print("Our guess range is between 1 and 20, please try a bit lower")
        guess = int(raw_input("Enter an integer from 1 to 20: "))
	attempts += 1
    else:
        print "!!***CONGRATULATIONS***!! you guessed it!"
        break
    
if attempts == 6:
    print("\nSorry you reached the maximum number of tries")
    print("The secret number was ",n)
else:
    print("\nYou guessed it! The number was " ,n)
    print("You guessed it in ", attempts,"attempts")	

raw_input("\n\n Press the enter key to exit") 
