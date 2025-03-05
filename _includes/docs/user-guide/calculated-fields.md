* TOC
{:toc}

Calculated fields are a mechanism for automatically computing values based on input data. 
They allow users to process data in real time and store it as attributes or telemetry, using function or expressions.
This is useful for:
- Automate calculations without the need for external data processing
- Validate and normalize output values
- Generate derived metrics based on received data




* Що це таке і навіщо воно потрібне + приклади із реального життя
* Де воно може юзатись - на рівні девайса чи асета, або на рівні девайс та асет профілів.
* Типи калкулейтед філдів (Simple vs Script)
* Аргументи
* Simple Calculated Field
    * expression + output + examples
* Script Calculated Field
    * expression (TBEL)
    * output format
    * examples: пару екземплів які я надам:
        * C -> F
        * Rolling average/min/max
        * Merge two rolling arguments

## Види обчислюваних полів

Існує два типи:
- Прості (Simple Calculated Field) – використовують математичні операції та базові функції для обчислення.
- Скриптові (Script Calculated Field) – дозволяють створювати складніші розрахунки за допомогою спеціальної мови TBEL (ThingBoard Expression Language).
