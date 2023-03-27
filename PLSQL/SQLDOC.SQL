--SQL DOC

SET SERVEROUTPUT ON

DECLARE 
     NM VARCHAR2(20):='SANTOSH';
BEGIN 
     DBMS_OUTPUT.PUT_LINE(NM);
END;
/

---------------------------------------------------

---2:USER INPUT
DECLARE 
     NM VARCHAR2(20):='&NM';
BEGIN 
     DBMS_OUTPUT.PUT_LINE(NM);
END;
/

