SOURCES=$(wildcard *.cpp)
EXECS=$(patsubst %.cpp,%,$(SOURCES))
CC = g++
CCFLAGS = -std=c++17 -pedantic -Wall -g

all: build

build: $(EXECS)

%: %.cpp
	$(CC) $(CCFLAGS) $? -o $@ 

clean:
	rm -f $(EXECS) a.out

.PHONY: test all format build

# first target $@
# all prerequisites newer than the target $?
# all prerequisites $^
