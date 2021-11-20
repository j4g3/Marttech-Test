ORMCONFIG=build/config/index.prod.js

yarn build
$(yarn bin typeorm) -f $ORMCONFIG $@