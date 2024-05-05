# This code is extracted from the following github
# https://github.com/patrickloeber/python-engineer-notebooks/blob/master/advanced-python/17-Multiprocessing.ipynb

from multiprocessing import Process
import os

def square_numbers():
    for i in range(1000):
        result = i * i

        
if __name__ == "__main__":        
    processes = []
    num_processes = os.cpu_count()
    # number of CPUs on the machine. Usually a good choise for the number of processes

    # create processes and asign a function for each process
    for i in range(num_processes):
        process = Process(target=square_numbers)
        processes.append(process)

    # start all processes
    for process in processes:
        process.start()

    # wait for all processes to finish
    # block the main programm until these processes are finished
    for process in processes:
        process.join()

# ------------------------------- Share data between processes ------------------
# Since processes don't live in the same memory space, they do not have access to the
# same (public) data. Thus, they need special shared memory objects to share data.

# Data can be stored in a shared memory variable using Value or Array
# Value(type, value): Create a ctypes object of type type. Access the value with .target.
# Array(type, value): Create a ctypes array with elements of type type. 
# Access the values with [].
from multiprocessing import Process, Value, Array
import time

def add_100(number):
    for _ in range(100):
        time.sleep(0.01)
        number.value += 1

def add_100_array(numbers):
    for _ in range(100):
        time.sleep(0.01)
        for i in range(len(numbers)):
            numbers[i] += 1


if __name__ == "__main__":

    shared_number = Value('i', 0) 
    print('Value at beginning:', shared_number.value)

    shared_array = Array('d', [0.0, 100.0, 200.0])
    print('Array at beginning:', shared_array[:])

    process1 = Process(target=add_100, args=(shared_number,))
    process2 = Process(target=add_100, args=(shared_number,))

    process3 = Process(target=add_100_array, args=(shared_array,))
    process4 = Process(target=add_100_array, args=(shared_array,))

    process1.start()
    process2.start()
    process3.start()
    process4.start()

    process1.join()
    process2.join()
    process3.join()
    process4.join()

    print('Value at end:', shared_number.value)
    print('Array at end:', shared_array[:])

    print('end main')

    # output:
    # Value at beginning: 0
    # Array at beginning: [0.0, 100.0, 200.0]
    # Value at end: 144
    # Array at end: [134.0, 237.0, 339.0]
    # end main

    # in above race condition happended and the valye didn't reach 200

    # -------------------------------- Locks -------------------------
    # lock.acquire() : This will lock the state and block
    # lock.release() : This will unlock the state again.
    # import Lock
from multiprocessing import Lock
from multiprocessing import Process, Value, Array
import time

def add_100(number, lock):
    for _ in range(100):
        time.sleep(0.01)
        # lock the state
        lock.acquire()
        
        number.value += 1
        
        # unlock the state
        lock.release()

def add_100_array(numbers, lock):
    for _ in range(100):
        time.sleep(0.01)
        for i in range(len(numbers)):
            lock.acquire()
            numbers[i] += 1
            lock.release()
            # or
            #  with lock:
            #   number.value += 1


if __name__ == "__main__":

    # create a lock
    lock = Lock()
    
    shared_number = Value('i', 0) 
    print('Value at beginning:', shared_number.value)

    shared_array = Array('d', [0.0, 100.0, 200.0])
    print('Array at beginning:', shared_array[:])

    # pass the lock to the target function
    process1 = Process(target=add_100, args=(shared_number, lock))
    process2 = Process(target=add_100, args=(shared_number, lock))

    process3 = Process(target=add_100_array, args=(shared_array, lock))
    process4 = Process(target=add_100_array, args=(shared_array, lock))

    process1.start()
    process2.start()
    process3.start()
    process4.start()

    process1.join()
    process2.join()
    process3.join()
    process4.join()

    print('Value at end:', shared_number.value)
    print('Array at end:', shared_array[:])

    print('end main')

    # output: 
    # Value at beginning: 0
    # Array at beginning: [0.0, 100.0, 200.0]
    # Value at end: 200
    # Array at end: [200.0, 300.0, 400.0]
    # end main

# -------------------------------------------------- Queue -----------------
# Operations with a queue are process-safe. The multiprocessing Queue implements
# all the methods of queue.Queue except for task_done() and join(). Important methods are:

# q.get() : Remove and return the first item. By default, it blocks until the item is available.
# q.put(item) : Puts element at the end of the queue. By default, it blocks until a free slot is available.
# q.empty() : Return True if the queue is empty.
# q.close() : Indicate that no more data will be put on this queue by the current process.
# communicate between processes with the multiprocessing Queue
# Queues are thread and process safe
from multiprocessing import Process, Queue

def square(numbers, queue):
    for i in numbers:
        queue.put(i*i)

def make_negative(numbers, queue):
    for i in numbers:
        queue.put(i*-1)

if __name__ == "__main__":
    
    numbers = range(1, 6)
    q = Queue()

    p1 = Process(target=square, args=(numbers,q))
    p2 = Process(target=make_negative, args=(numbers,q))

    p1.start()
    p2.start()

    p1.join()
    p2.join()

    # order might not be sequential
    while not q.empty():
        print(q.get())
        
    print('end main')

    # output: 
    # 1
    # 4
    # 9
    # 16
    # 25
    # -1
    # -2
    # -3
    # -4
    # -5
    # end main

# ------------------------------------ Process Pool -----------------------
# A process pool object controls a pool of worker processes to which jobs can be 
# submitted It supports asynchronous results with timeouts and callbacks and has
# a parallel map implementation. It can automatically manage the available processors
# and split data into smaller chunks which can then be processed in parallel by
# different processes

# map(func, iterable[, chunksize]) : This method chops the iterable into a number of chunks
# which it submits to the process pool as separate tasks. The (approximate) size of these
# chunks can be specified by setting chunksize to a positive integer. 
# It blocks until the result is ready.

# close() : Prevents any more tasks from being submitted to the pool. Once all the 
#tasks have been completed the worker processes will exit.

# join(): Wait for the worker processes to exit. One must call close() or terminate()
# before using join().

# apply(func, args): Call func with arguments args. It blocks until the result is ready.
# func is only executed in ONE of the workers of the pool.

# Note: There are also asynchronous variants map_async() and apply_async() that will not block. They can execute callbacks when the results are ready.

from multiprocessing import Pool 

def cube(number):
    return number * number * number

    
if __name__ == "__main__":
    numbers = range(10)
    
    p = Pool()

    # by default this allocates the maximum number of available 
    # processors for this task --> os.cpu_count()
    result = p.map(cube,  numbers)
    
    # or 
    # result = [p.apply(cube, args=(i,)) for i in numbers]
    
    p.close()
    p.join()
    
    print(result)

    # output: 
    # [0, 1, 8, 27, 64, 125, 216, 343, 512, 729]