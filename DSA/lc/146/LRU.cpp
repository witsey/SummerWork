#include <iostream>
#include <map>
#include <unordered_map>

using namespace std;

class Node {
public:

    int key;
    int value;
    Node* next;
    Node* prev;

    Node() : key(0), value(0), next(nullptr), prev(nullptr) {}
    Node(int key, int value, Node* next = nullptr, Node* prev = nullptr) 
    {
        this->key = key;
        this->value = value;
        this->next = next;
        this->prev = prev;
    } 
};

class LRUCache {
public:

    Node* head = nullptr; // LRU
    Node* tail = nullptr; // MRU
    unordered_map<int, Node*> cache_map;
    int capacity;
    int size;

    LRUCache(int capacity) {this->capacity = capacity; this->size = 0;}

    bool exits(int key) 
    { 
        auto it = cache_map.find(key); 
        return it != cache_map.end();  
    }

    void update_MRU(int key) 
    {

        if (!exits(key)) return; // key doesn't exist

        if (cache_map[key] == tail) return; // already MRU. No updates are necessary

        if (cache_map[key]->prev) // checking that it is not the head
            cache_map[key]->prev->next = cache_map[key]->next;

        cache_map[key]->next->prev = cache_map[key]->prev;
        tail->next = cache_map[key];
        cache_map[key]->prev = tail;

        if (head == cache_map[key]) head = cache_map[key]->next;

        cache_map[key]->next = nullptr;
        tail = cache_map[key];
        return;
    }

    void append(int key, int value) 
    {
        size++;

        if (head == nullptr) 
        {
            head = new Node(key, value);
            tail = head;
            cache_map[key] = head; 
            return;
        }

        tail->next = new Node(key, value);
        tail = tail->next;
        cache_map[key] = tail;
        update_MRU(key);
        return;
    }
    
    int get(int key) {

        if (!exits(key)) return -1;
    
        update_MRU(key);
        return cache_map[key]->value;
    }
    
    void put(int key, int value) {
        
        if (!exits(key)) 
        {
            if (size < capacity) 
            {
                this->append(key, value);
                return;
            }

            // evict the LRU first to get space

            Node* tmp = head;
            head = head->next;
            head->prev = nullptr;
            tmp->next = nullptr;
            delete tmp;
            --size;

            this->append(key, value);
            return;
        }

        cache_map[key]->value = value;
        return;
    }
};


int main() {}