
import {Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class OptionsService {
    public pushEvent = new EventEmitter();
}
