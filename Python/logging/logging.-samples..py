import logging
logging.debug('This is a debug message')
logging.info('This is an info message')
logging.warning('This is a warning message')
logging.error('This is an error message')
logging.critical('This is a critical message')
# Output: 
# WARNING:root:This is a warning message
# ERROR:root:This is an error message
# CRITICAL:root:This is a critical message
#--------------------------------------------------

# import logging
# logging.basicConfig(level=logging.DEBUG, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s', datefmt='%m/%d/%Y %H:%M:%S')
# # Now also debug messages will get logged with a different format.
# logging.debug('Debug message')

# This would log to a file instead of the console.
# logging.basicConfig(level=logging.DEBUG, filename='app.log')

# Output: 04/29/2024 06:29:12 - root - DEBUG - Debug message

# ----------------------------------------------------------
# import logging
# import os

# directory = os.path.dirname(os.path.realpath(__file__))
# # Create a new file path
# file_path = os.path.join(directory, 'file.log')

# logger = logging.getLogger(__name__)

# # Create handlers
# stream_handler = logging.StreamHandler()
# file_handler = logging.FileHandler(file_path)

# # Configure level and formatter and add it to handlers
# stream_handler.setLevel(logging.WARNING) # warning and above is logged to the stream
# file_handler.setLevel(logging.ERROR) # error and above is logged to a file

# stream_format = logging.Formatter('%(name)s - %(levelname)s - %(message)s')
# file_format = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
# stream_handler.setFormatter(stream_format)
# file_handler.setFormatter(file_format)

# # Add handlers to the logger
# logger.addHandler(stream_handler)
# logger.addHandler(file_handler)

# logger.warning('This is a warning') # logged to the stream
# logger.error('This is an error') # logged to the stream AND the file!

# # output: 
# # 04/29/2024 06:31:27 - root - DEBUG - Debug message
# # __main__ - WARNING - This is a warning
# # 04/29/2024 06:31:27 - __main__ - WARNING - This is a warning
# # __main__ - ERROR - This is an error
# # 04/29/2024 06:31:27 - __main__ - ERROR - This is an error
# --------------------------------------------------------------
# # reading from logging.conf
# # Then use the config file in the code
# import logging
# import logging.config
# import os
# directory = os.path.dirname(os.path.realpath(__file__))
# # Create a new file path
# file_path = os.path.join(directory, 'logging.conf')
# logging.config.fileConfig(file_path)

# # create logger with the name from the config file. 
# # This logger now has StreamHandler with DEBUG Level and the specified format
# logger = logging.getLogger('simpleExample')

# logger.debug('debug message')
# logger.info('info message')

# # Output:
# # 04/29/2024 06:43:46 - root - DEBUG - Debug message
# # 2024-04-29 06:43:46,278 - simpleExample - DEBUG - debug message
# # 2024-04-29 06:43:46,278 - simpleExample - INFO - info message