# pinkydb

pinkydb - tiny in-process documents storage for node.js with mongodb like queries

work in progress...

## TODO (before release)

* return freezed objects instead of cloned
* better cursors (clone at cursor, test erors)
* at lib/query do more at compile time instead of runtime
* dot notation
* test storages, multi database, drop dummy
* using mhook or not using hooks at all
* better browser support (add version, drop unused code from buld)
* docs
* make storage loadCollection async
* make Collection api compatible with mongodb native (include cuntructor)
* sort
* serialize async
* add to file on insert/update
