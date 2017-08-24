import SearchRecordsConstant from '../constants/search.records.constant'
import yoaxios from '../lib/yoaxios';

export function addSearchRecord(data) {
    yoaxios({
        url: '/search/records',
        method: 'POST',
        data: data
    })
}