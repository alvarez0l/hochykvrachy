//массив цветов, для списка (select)

//хелпер, ищет в массиве по id название цвета
Thelpers.select = function(value, arr) {
    var res = arr.findItem('id', value); 
    return (res) ? res.name : '';                       
 };
 //обработчик сработает при клике по ячейки таблицы с классом edit
$('body').on('click', 'table td.edit', function(e) {            
    if ($(e.target).closest('select, input, .btn-group, .btn, a').length) return; //определим ряд, той ячейки в котрой произошел клик         
    var tr = $(this).closest('tr');  
    //индекс объекта в массиве данных datasource
    var ind = tr.data('index'); 
    //тип поля для ввода select или input
    var type = $(this).data('type');
    //переменная в объекте, которую будем менять
    var field = $(this).data('field');
    //если select, то определим из какого массива будем формировать список   
    //для выбора, в нашем случае arr_colors
    var source = $(this).data('source');
    //если обычный input, то вставим в ячейку компонент j-texbox, в параметрах   
    //укажем, какое именно свойство менять в массиве с данными для таблицы и в какой строке
    if (type=='textbox') {
        $(this).html('<div data---="textbox__datasource[{0}].{1}__class:form-control input-sm;keypress:true;"></div>'.format(ind, field));
   }
   //если select, то вставим компонент j-dropdow, в параметрах    
   //укажем, какое именно свойство менять в массиве с данными для таблицы и в   
   //какой строке, также укажем из какого массива сформировать список для выбора цвета
   if (type=='dropdown') {
        $(this).html('<div data---="dropdown__datasource[{0}].{1}__class:form-control input-sm;required:true;datasource:{2};text:name;value:id;type:number;"></div>'.format(ind, field, source));
   }
   //так как компоненты добавлены у нас динамически, то для того чтобы   
   //они заработали необходимо вызвать данный метод
   COMPILE();              
});
//добавление записи в таблицу
function addRow(e) {
    //проверим форму на ошибки, если есть ошибки прервем добавление записи
    if (!VALIDATE('form.*')) return; 
    //добавим запись в конец массива datasource
    PUSH('datasource', form);
    //очистим форму
    SET('form', null);
    RESET('form.*');
}
//удалим запись из таблицы
function remRow(e) {    
    //определим индекс строки в таблице и соответственно в массиве
    var tr = $(e).closest('tr');
    var ind = tr.data('index'); 
    //удалим из массива объект по опрделенному индексу
    datasource.splice(ind, 1);
    //обновим массив
    UPDATE('datasource');   
}