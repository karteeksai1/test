def calculate_total(price,tax,discount):

    FinalAmount=(price+tax)-discount

    if FinalAmount<0:
        FinalAmount=0

    print("The final amount is",FinalAmount)

    return FinalAmount



numbers=[10,20,30,40]

for item in numbers:

    calculate_total(item,2,1)
