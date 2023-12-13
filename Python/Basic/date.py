# ---------------------------------------- UTC --------------------------
import pytz
from datetime import datetime, timezone
import datetime

dt_now = datetime.datetime.now(datetime.timezone.utc)
print(dt_now)

australian_time = datetime.datetime.now(pytz.timezone('Australia/Perth')) 
print(australian_time)


#  ----------------------------------------- local time zone -------------------------
import pytz
from datetime import datetime, timezone
from tzlocal import get_localzone

utc_dt = datetime.now(timezone.utc)
print(utc_dt)


PST = pytz.timezone('US/Pacific')
EST = pytz.timezone('US/Eastern')
JST = pytz.timezone('Asia/Tokyo')
NZST = pytz.timezone('Pacific/Auckland')

print("Pacific time {}".format(utc_dt.astimezone(PST).isoformat()))
print("Eastern time {}".format(utc_dt.astimezone(EST).isoformat()))
print("UTC time     {}".format(utc_dt.isoformat()))
print("Japan time   {}".format(utc_dt.astimezone(JST).isoformat()))

# Use astimezone() without an argument
print("Local time   {}".format(utc_dt.astimezone().isoformat()))

# Use tzlocal get_localzone
print("Local time   {}".format(utc_dt.astimezone(get_localzone()).isoformat()))

# Explicitly create a pytz timezone object
# Substitute a pytz.timezone object for your timezone
print("Local time   {}".format(utc_dt.astimezone(NZST).isoformat()))


#  --------------------------------------- Timestamp ----------------------------------------
from tzlocal import get_localzone

timestamp = datetime.fromtimestamp(1658707200000/1000)
print(timestamp.strftime('%Y-%m-%d %H:%M:%S'))

timestamp = 1545730073
dt_object = datetime.fromtimestamp(timestamp)

print("dt_object =", dt_object)
print("type(dt_object) =", type(dt_object))

# current date and time
now = datetime.now()
print(now)
timestamp = datetime.timestamp(now)
print("timestamp =", timestamp)

dt_object = datetime.fromtimestamp(timestamp)
print("dt_object =", dt_object)

utc_offset = datetime.fromtimestamp(timestamp) - datetime.utcfromtimestamp(timestamp)
print(utc_offset)

#------------------------------------------------------------
timestamp = datetime.timestamp(datetime.strptime('2012-12-31 23:59', '%Y-%m-%d %H:%M'))
print(timestamp)
print(datetime.fromtimestamp(timestamp))
print(datetime.utcfromtimestamp(timestamp))

#------------------------------------------------------

# timestamp method read from local time (in perth time)
timestamp = datetime.timestamp(datetime.strptime('2012-12-31 23:59', '%Y-%m-%d %H:%M'))
print(timestamp)
AST = pytz.timezone('Australia/Perth')
JST = pytz.timezone('Asia/Tokyo')

dt1 = datetime.fromtimestamp(timestamp,AST)
dt2 = datetime.fromtimestamp(timestamp,JST)
# japan_dt = utc_dt.astimezone(JST).isoformat()

print(dt1)
print(dt2)

# --------------------------------------------
# timestampstr = "2023-03-29 00:11:18+08:00"
timestampstr = "2023-03-29 00:11:18+08:00"
timestamp = datetime.timestamp(datetime.strptime(timestampstr, "%Y-%m-%d %H:%M:%S+08:00" ))
print(timestamp)

# ---------------------------------------------------------------------------
# date time interval
start_date = datetime.datetime.strptime("2023-03-30","%Y-%m-%d")
end_date = datetime.datetime.now().replace(hour=0, minute=0, second=0,microsecond = 0)

print(start_date, end_date)

d0 = start_date
d1 = end_date
delta = d1 - d0
interval_days = delta.days
print(interval_days)

while interval_days >= 1:
    #print("start_date: ",d0)
        #print("incremented_date: ",d0)

        d1 = d0 + datetime.timedelta(days=1)

        # status = fetch_write(dbname, password, url, cert, d0,d1)
        # print(status)
        d0 = d0 + datetime.timedelta(days=1)
        interval_days -=1

start_date = str(start_date)
end_date = str(d1)[:10]

print(start_date, end_date)

