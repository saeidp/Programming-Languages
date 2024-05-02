# This code is extracted from the following github
# https://github.com/patrickloeber/python-engineer-notebooks/blob/master/advanced-python/16-Threading%20in%20Python.ipynb
# ----------------------------- Multiprocessing------------------------------
from multiprocessing import Process
import os


def square_numbers():
    for i in range(1000):
        result = i * i


if __name__ == "__main__":
    processes = []
    num_processes = os.cpu_count()

    # create processes and asign a function for each process
    for i in range(num_processes):
        process = Process(target=square_numbers)
        processes.append(process)

    # start all processes
    for process in processes:
        process.start()

    # wait for all processes to finish
    # block the main thread until these processes are finished
    for process in processes:
        process.join()

# ------------------------------- Threading --------------------------------
# GIL - Global interpreter lock
# This is a mutex (or a lock) that allows only one thread to hold control of 
# the Python interpreter. This means that the GIL allows only one thread to execute
# at a time even in a multi-threaded architecture.
from threading import Thread

def square_numbers():
    for i in range(1000):
        result = i * i

        
if __name__ == "__main__":        
    threads = []
    num_threads = 10

    # create threads and asign a function for each thread
    for i in range(num_threads):
        thread = Thread(target=square_numbers)
        threads.append(thread)

    # start all threads
    for thread in threads:
        thread.start()

    # wait for all threads to finish
    # block the main thread until these threads are finished
    for thread in threads:
        thread.join()
#-----------------------------Creat and run threads-------------------------------------- 
from threading import Thread

def square_numbers():
    for i in range(1000):
        result = i * i

        
if __name__ == "__main__":        
    threads = []
    num_threads = 10

    # create threads and asign a function for each thread
    for i in range(num_threads):
        thread = Thread(target=square_numbers)
        threads.append(thread)

    # start all threads
    for thread in threads:
        thread.start()

    # wait for all threads to finish
    # block the main thread until these threads are finished
    for thread in threads:
        thread.join()

#-------------------------- Share data between threads ------------------------
# there is a rece issue that while one has updated the value but in sleep the 
# other thread again use the initial value and end up with 1
from threading import Thread
import time


# all threads can access this global variable
database_value = 0

def increase():
    global database_value # needed to modify the global value
    
    # get a local copy (simulate data retrieving)
    local_copy = database_value
        
    # simulate some modifying operation
    local_copy += 1
    time.sleep(0.1)
        
    # write the calculated new value into the global variable
    database_value = local_copy


if __name__ == "__main__":

    print('Start value: ', database_value)

    t1 = Thread(target=increase)
    t2 = Thread(target=increase)

    t1.start()
    t2.start()

    t1.join()
    t2.join()

    print('End value:', database_value)

    print('end main')

    # output: Start value:  0  End value: 1   end main

# -------------------------------------- Fixing the race ------------------------
# import Lock
from threading import Thread, Lock
import time


database_value = 0

def increase(lock):
    global database_value 
    
    # lock the state
    lock.acquire()
    
    local_copy = database_value
    local_copy += 1
    time.sleep(0.1)
    database_value = local_copy
    
    # unlock the state
    lock.release()


if __name__ == "__main__":

    # create a lock
    lock = Lock()
    
    print('Start value: ', database_value)

    # pass the lock to the target function
    t1 = Thread(target=increase, args=(lock,)) # notice the comma after lock since args must be a tuple
    t2 = Thread(target=increase, args=(lock,))

    t1.start()
    t2.start()

    t1.join()
    t2.join()

    print('End value:', database_value)

    print('end main')
    # output: Start value:  0  End value: 2  end main

# ------------------------------------- Use lock as context manager --------------
def increase(lock):
    global database_value 
    
    with lock: 
        local_copy = database_value
        local_copy += 1
        time.sleep(0.1)
        database_value = local_copy 

# --------------------------- Daemon threads -------------------------
# Daemon threads are background threads that automatically die when the main program ends. 
from threading import Thread, Lock, current_thread
from queue import Queue

def worker(q, lock):
    while True:
        value = q.get()  # blocks until the item is available

        # do stuff...
        with lock:
            # prevent printing at the same time with this lock
            print(f"in {current_thread().name} got {value}")
        # ...

        # For each get(), a subsequent call to task_done() tells the queue
        # that the processing on this item is complete.
        # If all tasks are done, q.join() can unblock
        q.task_done()


if __name__ == '__main__':
    q = Queue()
    num_threads = 10
    lock = Lock()

    for i in range(num_threads):
        t = Thread(name=f"Thread{i+1}", target=worker, args=(q, lock))
        t.daemon = True  # dies when the main thread dies
        t.start()
    
    # fill the queue with items
    for x in range(20):
        q.put(x)

    q.join()  # Blocks until all items in the queue have been gotten and processed.

    print('main done')

# output: 
# in Thread1 got 0
# in Thread2 got 1
# in Thread2 got 11
# in Thread2 got 12
# in Thread2 got 13
# in Thread2 got 14
# in Thread2 got 15
# in Thread2 got 16
# in Thread2 got 17
# in Thread2 got 18
# in Thread2 got 19
# in Thread8 got 5
# in Thread4 got 9
# in Thread1 got 10
# in Thread5 got 2
# in Thread6 got 3
# in Thread9 got 6
# in Thread7 got 4
# in Thread10 got 7
# in Thread3 got 8
# main done