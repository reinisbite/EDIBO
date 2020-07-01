Uzdevuma apraksts:


Analysis of Windows Event Logs using Pandas Dataframe


Python Pandas is a library that provides data science capabilities to Python. Using this library, you can use data structures like DataFrames. This data structure allows you to model the data like an in-memory database. By doing so, you will get query-like capabilities over the data set.

We set up environment variables, dependencies, loaded the necessary libraries for working with both DataFrames and regular expressions, and of course loaded the example log data. Then we wrangled our log data into a clean, structure, and meaningful format. Here in part two, we focus on analyzing that data.

Let’s compute some statistics regarding the size of content our web server returns. In particular, we’d like to know the average, minimum, and maximum content sizes.
https://opensource.com/sites/default/files/uploads/visualizing_and_analyzing_nasa_logs_figure_1.png

https://www.dataquest.io/blog/tutorial-time-series-analysis-with-pandas/

A DataFrame is a table much like in SQL or Excel. It's similar in structure, too, making it possible to use similar operations such as aggregation, filtering, and pivoting. However, because DataFrames are built in Python, it's possible to use Python to program more advanced operations and manipulations than SQL and Excel can offer. As a bonus, the creators of pandas have focused on making the DataFrame operate very quickly, even over large datasets.

DataFrames are particularly useful because powerful methods are built into them. In Python, methods are associated with objects, so you need your data to be in the DataFrame to use these methods. DataFrames can load data through a number of different data structures and files, including lists and dictionaries, csv files, excel files, and database records (more on that here).

https://mode.com/python-tutorial/pandas-dataframe/
